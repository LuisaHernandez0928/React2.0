function ContextMenu({ x, y, onClose, onSelect }) {
    return (
      <div
        style={{
          position: 'fixed',
          top: y,
          left: x,
          border: '1px solid #ccc',
          padding: '8px',
          background: '#fff',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
          width:'150px',
          color: 'black'
        }}
      >
        <div onClick={() => onSelect('New folder')}>New folder</div>
        <div onClick={() => onSelect('New file')}>New file</div>
        <div onClick={() => onSelect('Rename')}>Rename</div>
        <div onClick={() => onSelect('Delete')}>Delete</div>
      </div>
    );
}

export { ContextMenu };
