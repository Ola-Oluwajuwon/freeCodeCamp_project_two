import "./previewer.css"

const Previewer = ({ markdownText }) => {
  return (
    <div className="previewer">
     <div>
      <div id="preview">
        <div className="previewer-header">
          <i></i>
          <span>Previewer</span>
          </div>
        <div className="previewer-body">{markdownText}</div>
      </div>
     </div>
    </div>
  );
};

export default Previewer;
