export default function Modal({ showMess, errorMess = null }) {
  if (showMess) {
    return (
      <div className="modalParentDiv">
        <div className="modalChildDiv">
          <h1 style={{ color: errorMess ? "red" : "green" }}>
            {errorMess !== null ? errorMess : "The Form has been Submitted Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
