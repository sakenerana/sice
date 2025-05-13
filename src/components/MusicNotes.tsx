
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
          <img src="./img/palmleave.svg" alt="music" />
        );
      case 'bass':
        return (
          <img src="./img/treble-clef.svg" alt="treble-clef" />
        );
      case 'quarter':
        return (
          <img src="./img/palmleave.svg" alt="music" />
        );
      case 'eighth':
        return (
          <img src="./img/treble-clef.svg" alt="treble-clef" />
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
            width: '10%',
            height: '10%',
            // width: `${note.size}px`,
            // height: `${note.size * 2}px`,
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
