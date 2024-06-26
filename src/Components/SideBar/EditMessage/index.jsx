export default function EditMessage({ textRef, nodeName, setNodeName }) {
  return (
    <div className="updatenode__controls">
      <label>Write Message</label>
      <textarea
        ref={textRef}
        value={nodeName}
        onChange={(evt) => setNodeName(evt.target.value)}
        style={{ height: "59px" }}
      />
    </div>
  );
}
