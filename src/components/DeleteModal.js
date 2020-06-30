import React from "react";

export default function DeleteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const coverClass = isOpen ? "modal-cover modal-cover-active" : "modal-cover";
  const containerClass = isOpen
    ? "modal-container modal-container-active"
    : "modal-container";
  const submit = () => {};
  return (
    <div className="modal">
      <button color="secondary" onClick={() => setIsOpen(!isOpen)}>
        Delete
      </button>

      <div className={containerClass}>
        <div>
          <div className="modal-header">
            <h3>Submit your Beta Tester key</h3>
            <img
              className="modal-close"
              src="./close.svg"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <div className="modal-body">
            <form>
              <label>
                <input
                  placeholder="Tester Key"
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                ></input>
              </label>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  submit();
                }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>

      <div className={coverClass} onClick={() => setIsOpen(!isOpen)}></div>
    </div>
  );
}
