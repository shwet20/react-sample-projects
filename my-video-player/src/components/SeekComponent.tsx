import React from 'react';
import videoInfo from '../videoInfo.json';

interface SeekComponentProps {
  onSeek: (time: number) => void;
}

const SeekComponent: React.FC<SeekComponentProps> = ({ onSeek }) => {
  return (
    <div className="seek-container flex space-x-2 mt-4">
      {Object.entries(videoInfo).map(([tag, time]) => (
        <button
          key={tag}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => onSeek(time as number)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default SeekComponent;
