
import { useEffect, useState } from "react";

interface MusicNote {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  type: 'treble' | 'bass' | 'quarter' | 'eighth';
}

const MusicNotes = () => {
  const [notes, setNotes] = useState<MusicNote[]>([]);

  useEffect(() => {
    const generateNotes = () => {
      const types: ('treble' | 'bass' | 'quarter' | 'eighth')[] = ['treble', 'bass', 'quarter', 'eighth'];
      const newNotes: MusicNote[] = [];
      
      for (let i = 0; i < 8; i++) {
        newNotes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 15,
          rotation: Math.random() * 360,
          type: types[Math.floor(Math.random() * types.length)]
        });
      }
      
      setNotes(newNotes);
    };
    
    generateNotes();
  }, []);

  const renderNote = (type: string) => {
    switch(type) {
      case 'treble':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 60" fill="currentColor">
            <path d="M22.5,32.6c-1.7,0.7-3.7,1.9-3.7,4.8c0,2.8,2.1,4.6,4.2,4.6c2.3,0,3.8-1.7,3.8-4.1c0-2-1.2-3.4-2.7-4.2c1-2.8,2.1-7.9,2.7-15.8c-1.3,2.4-3.2,3.8-5.3,3.8c-3.5,0-5.2-2.9-5.2-6c0-2.7,1.4-5.6,1.4-7.9c0-2.3-1.4-3.3-2.7-3.3c-2.2,0-4,1.7-4,4.6c0,2,0.3,10.1,4.6,16.5c-0.2,6.5-0.9,11.6-2.3,15.7c-1.7,4.7-4,8-6.7,9.7l0.7,1.1c2.9-0.9,5.6-2.8,7.7-5.4c2-2.5,3.3-5.4,4.3-8.6C20.8,36.2,21.6,34.4,22.5,32.6z M20,9.1c0,2-1.2,4.7-1.2,7.1c0,2.3,1.2,4.2,3.3,4.2c1.6,0,3-1.1,4.2-3.8C25.7,11.2,23.4,9.1,20,9.1z M23.6,36.9c1.4,0.8,2.4,1.8,2.4,3.5c0,1.8-1.1,2.9-2.6,2.9c-1.5,0-3-1.3-3-3.3c0-2.1,1.3-3,2.2-3.3C23,36.7,23.3,36.7,23.6,36.9z"/>
          </svg>
        );
      case 'bass':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 70" fill="currentColor">
            <path d="M15.2,11.8c4.2,0,6.2-2.3,6.2-5.4c0-2.4-1.8-4.3-4.3-4.3c-0.5,0-0.9,0.1-1.2,0.1c-0.4,0-0.7-0.1-0.7-0.5c0-0.6,1.2-0.7,1.7-0.7c3,0,5.2,2.2,5.2,5.2c0,3.4-2.6,6.2-6,6.2c-7.8,0-11.5,6.3-11.5,13.6c0,8.2,4.9,13.4,13.1,14.9c0-0.7-0.1-1.4-0.1-2.2c0-8.8,4.4-15.6,11-15.6c4.6,0,8.2,3.3,8.2,8c0,5.2-3.9,9-8.1,9c-2.6,0-3-1.3-3-1.9c0-0.5,0.1-0.8,0.6-2.3c0.2-0.7,0.3-1.2,0.3-1.7c0-1.4-0.8-2.4-2.3-2.4c-1.7,0-3.2,1.7-3.2,4.1c0,2.8,2.4,4.8,5.9,4.8c5,0,10.3-4.2,10.3-11c0-5.7-4.5-9.9-10.6-9.9c-7,0-12.9,5.3-14.5,12.9c-0.1,0.6-0.2,1.2-0.3,1.9C5.1,29.2,3,24.5,3,19.6C3,15,6.1,11.8,15.2,11.8z M20.2,27.3c0.8,0,1.3,0.5,1.3,1.3c0,0.5-0.1,1.1-0.3,1.6c-0.3,0.9-0.5,1.7-0.5,2.5c0,1.3,0.9,2.5,3.2,2.5c3.1,0,6.4-2.9,6.4-7.3c0-3.7-2.9-6.3-6.6-6.3c-6.3,0-9.4,7.3-9.4,14.5c0,0.7,0,1.3,0.1,2c0.4,0,0.8,0.1,1.2,0.1c0-0.3,0-0.7,0-1C15.7,31.3,17.6,27.3,20.2,27.3z"/>
          </svg>
        );
      case 'quarter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 60" fill="currentColor">
            <path d="M22,5c0,0-10,5.7-10,15v20c-1.5-1.2-3.7-1.9-6-1.9c-4.4,0-8,2.5-8,5.5s3.6,5.5,8,5.5s8-2.5,8-5.5V20c0-7.7,8-13,8-13V5z M14,44.1c0,1.9-3.1,3.5-6,3.5s-6-1.5-6-3.5s3.1-3.5,6-3.5S14,42.2,14,44.1z"/>
          </svg>
        );
      case 'eighth':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 60" fill="currentColor">
            <path d="M22,5c0,0-10,5.7-10,15v20c-1.5-1.2-3.7-1.9-6-1.9c-4.4,0-8,2.5-8,5.5s3.6,5.5,8,5.5s8-2.5,8-5.5V20c0-7.7,8-13,8-13V5z M14,44.1c0,1.9-3.1,3.5-6,3.5s-6-1.5-6-3.5s3.1-3.5,6-3.5S14,42.2,14,44.1z"/>
            <path d="M24.3,9.9c2.1,8.2,3.3,13.4,1.7,19.1c-0.1,0.5,0.2,0.7,0.5,0.2c4.5-6.1,2.4-13.8-2-19.7C24.3,9.1,24.1,9.3,24.3,9.9z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {notes.map((note) => (
        <div
          key={note.id}
          className="music-note absolute"
          style={{
            left: `${note.x}%`,
            top: `${note.y}%`,
            width: `${note.size}px`,
            height: `${note.size * 2}px`,
            transform: `rotate(${note.rotation}deg)`,
            color: '#000',
          }}
        >
          {renderNote(note.type)}
        </div>
      ))}
    </div>
  );
};

export default MusicNotes;
