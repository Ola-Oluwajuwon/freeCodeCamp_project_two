import "./editor.css"

const Editor = ({ onChange }) => {

  // function handleChange() {
  //   alert("Some texts were added!")
  // }

  return (
   <div>
    <div className="editor-header">
      <span>Editor</span>
    </div>
    <div>
      <textarea name="editor" id="editor" placeholder='Enter some text here...' 
      onChange={(e) => onChange(e.target.value)}></textarea>
    </div>
   </div>
  );
};

export default Editor;
