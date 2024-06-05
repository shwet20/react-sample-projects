import { all } from "axios";
import React, { useEffect, useState } from "react";
import {
  AiFillEdit,
  AiOutlineClose,
  AiOutlineUser,
} from "react-icons/ai";
const DataEntryForm = () => {
    const [formData, setFormData] = useState({
        "name": "",
        "address": "",
        "meterSerialNumber" :""
      });
      const [allInfo, setAllInfo] = useState([]);
      const [postion, setPosition] = useState("");
      const [showFlag, setShowFlag] = useState(false);
      const [error,setError] =useState([]);
      useEffect(()=>{
        const storedAllData = JSON.parse(localStorage.getItem('allInfo')) || [];
        setAllInfo(storedAllData);
      },[])
      useEffect(() => {
        localStorage.setItem('allInfo', JSON.stringify(allInfo));
      }, [allInfo]);
      const onChangeHandler = (event) => {
        const { name, value } = event.target; 
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
          }));
      };
      const onSubmitHandler = (e) => {
        e.preventDefault();
        let errorArray = []
        for(let x in formData){
           if( formData[x] === ""){
            errorArray.push(x)
           } 
        }
        if(errorArray.length > 0){
          setError(errorArray); 

        }else{
            setAllInfo((prevState) => [...prevState, formData]);
            setFormData({
                "name": "",
                "address": "",
                "meterSerialNumber" :""
            });
          setError([]);
        }
      };
      const onDelete = (index) => {
        const isDelte = window.confirm("Are You Sure want to Delete");
          if (isDelte) {
            setAllInfo((prevState) => {
              const filteredData = prevState.filter((item, ind) => {
                if (ind !== index) {
                  return item;
                }
              });
              return filteredData;
            });
          }
      };
      const onEdit = (formDatafromtable, position) => {
        setFormData(formDatafromtable);
        setPosition(position);
        setShowFlag(true);
      };
      const onSaveHandler = () => {
        setAllInfo((prevState) => {
          const result = prevState.map((item, index) => {
            if (index === postion) {
              return formData;
            } else {
              return item;
            }
          });
          return result;
        });
        setFormData({
            "name": "",
            "address": "",
            "meterSerialNumber" :""
        });
        setShowFlag(false);
      };
      const showError=(keyname)=>{
        return error.indexOf(keyname) > -1? true : false;     
       };
    return (
        <div>
            <div className="container-fluid p-5 ">
        <div className="row">
          <div 
          className={allInfo.length > 0 ? "col-3 p-3" : "col-4 p-3 offset-4"} 
          style={{ backgroundColor: "gainsboro" }}>
            <h2 className="text-center">
              Data Entry Form <AiOutlineUser />
            </h2>
            <form onSubmit={(e) => onSubmitHandler(e)}>
              <div className="form-group m-2">
                <label className="fw-bold mt-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => onChangeHandler(e)}
                  name="name"
                  className={
                    showError("name")
                      ? "form-control is-invalid mt-2"
                      : "form-control mt-2"
                  }
                  placeholder="Enter name"
                />
                {showError("name") && (
                  <div
                    className="invalid-feedback"
                  >
                    Please provide a Name.
                  </div>
                )}
              </div>
              <div className="form-group m-2">
                <label className="fw-bold mt-2">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => onChangeHandler(e)}
                  name="address"
                  className={
                    showError("address")
                      ? "form-control is-invalid mt-2"
                      : "form-control mt-2"
                  }
                  placeholder="Enter address"
                />
                {showError("address") && (
                  <div
                    className="invalid-feedback"
                  >
                    Please provide Address.
                  </div>
                )}
              </div>
              <div className="form-group m-2">
                <label className="fw-bold mt-2">Meter Serial Number</label>
                <input
                  type="number"
                  value={formData.meterSerialNumber}
                  onChange={(e) => onChangeHandler(e)}
                  name="meterSerialNumber"
                  className={
                    showError("meterSerialNumber")
                      ? "form-control is-invalid mt-2"
                      : "form-control mt-2"
                  }
                  placeholder="Enter meterSerialNumber"
                />
                {showError("meterSerialNumber") && (
                  <div
                    className="invalid-feedback"
                  >
                    Please provide a valid Meter Serial Number.
                  </div>
                )}
              </div>
              <div className="pb-3 text-center">
                {!showFlag && (
                  <button type="submit" className="btn btn-primary mt-3">
                    Submit
                  </button>
                )}
                {showFlag && (
                  <button
                    type="button"
                    onClick={() => onSaveHandler()}
                    className="btn btn-primary mt-3"
                  >
                    Update
                  </button>
                )}
              </div>
            </form>
          </div>
          <div className="col-9">
            <div className="row mt-2 px-5">
                {allInfo.length >0 && <div>
                <table>
                  <thead>
                    <tr className=" text-center fw-bolder bg-white">
                      <th>Sr No</th>
                      <th scope="col-4" className="px-5 mx-5">Name</th>
                      <th scope="col-4" className="px-5 mx-5">Address</th>
                      <th scope="col-4" className="px-3 mx-5">Meter-Serial-Number</th>
                      <th className="px-3">Edit</th>
                      <th className="px-3">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allInfo.map((item, index) => {
                      return (
                        <tr className=" text-center fw-bold mt-5">
                          <td className="text-secondary">{index + 1}</td>
                          <td className="text-primary ">{item.name}</td>
                          <td className="text-info ">{item.address}</td>
                          <td className="text-primary ">{item.meterSerialNumber}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-success btn-sm  pt-0"
                              onClick={() => onEdit(item, index)}
                            >
                              <AiFillEdit />
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger pt-0"
                              onClick={() => onDelete(index)}
                            >
                              <AiOutlineClose />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div> }
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default DataEntryForm;