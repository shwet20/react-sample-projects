import React from "react";

const Card = ({ car }) => {
  return (
    <div className="c_card flex flex-col gap-2 w-full bg-blue-50 rounded-xl p-4 shadow-lg shadow-gray-400 mb-10">
      <img src={car.img} alt="Car" className="w-full rounded-xl mb-5" />
      <div className="title-row flex justify-between items-center mb-3">
        <h3 className="font-normal text-lg">{car.car_name}</h3>
        <span className="border border-dotted border-green-500 rounded-full px-4 py-2 text-sm">
          {car.year}
        </span>
      </div>
      <div className="features-row w-full border-b border-gray-300 mb-5 flex flex-col gap-2">
        <div className="flex justify-between">
          <label className="features flex items-center w-48 mb-3 text-gray-600 text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="w-5 h-5 fill-current text-blue-500 mr-2"
            >
              <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
            </svg>
            {car.people} People
          </label>
          <label className="features flex items-center w-48 mb-3 text-gray-600 text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current text-blue-500 mr-2"
            >
              <path d="M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V168v24 32V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z" />
            </svg>
            {car.mode}
          </label>
        </div>
        <div className="flex justify-between">
          <label className="features flex items-center w-48 mb-3 text-gray-600 text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current text-blue-500 mr-2"
            >
              <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
            </svg>
            {car.avg}km / 1-litre
          </label>
          <label className="features flex items-center w-48 mb-3 text-gray-600 text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current text-blue-500 mr-2"
            >
              <path
                d="M210.38,0C94.37,0,0,94.38,0,210.38c0,2.2,0.03,4.38,0.1,6.56c0.68,22.08,4.78,43.32,11.78,63.2
                       c28.84,81.83,106.93,140.62,198.5,140.62c91.59,0,169.7-58.83,198.51-140.69c7-19.88,11.1-41.11,11.77-63.19
                       c0.07-2.16,0.1-4.32,0.1-6.5C420.76,94.38,326.38,0,210.38,0z M83.931,258.73c3.685-1.125,7.402-2.218,11.186-3.243
                       c22.096-5.987,45.328-10.147,69.436-12.461l5.853,96.684C130.688,327.407,98.726,297.296,83.931,258.73z M212,242.98
                       c-15.74,0-28.5-12.76-28.5-28.5c0-15.74,12.76-28.5,28.5-28.5s28.5,12.76,28.5,28.5C240.5,230.22,227.74,242.98,212,242.98z
                        M250.495,339.666l5.85-96.637c24.055,2.312,47.245,6.461,69.31,12.432c3.784,1.022,7.501,2.114,11.186,3.237
                       C322.07,297.237,290.158,327.333,250.495,339.666z M332.986,189.901c-38.779-9.556-80.008-14.401-122.542-14.401
                       c-42.612,0-83.888,4.858-122.679,14.438c-3.916,0.966-7.784,1.995-11.629,3.054c0.093-0.72,0.17-1.444,0.275-2.161
                       C85.91,125.41,142.37,75,210.38,75c68,0,124.45,50.39,133.96,115.79c0.105,0.716,0.183,1.441,0.277,2.161
                       C340.771,191.893,336.902,190.865,332.986,189.901z"
              />
            </svg>
            Automatic
          </label>
        </div>
      </div>
      <div className="cost-rent flex justify-between items-center mb-3">
        <h3 className="font-medium text-lg">
          {car.rent_cost}
          <span className="text-sm font-normal"> / month</span>
        </h3>
        <div className="btn-row flex">
          <button className="favourite bg-blue-200 rounded-lg px-4 py-2 mr-3 hover:border-black hover:border-solid transition-all duration-500 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4 fill-current text-blue-500"
            >
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v-3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
          </button>
          <input
            type="button"
            className="btnRentNow bg-blue-500 text-white rounded-lg px-4 py-2 cursor-pointer"
            value="Rent Now"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
