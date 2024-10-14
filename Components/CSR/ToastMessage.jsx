import { showToast } from "react-next-toast";

function ToastMessage() {
  function showingToast() {
    
    
    showToast.success("Log in successful");
  }

  return (
    <div>
      <button onClick={() => showingToast()}> Show Toast </button>
    </div>
  );
}

export default ToastMessage;
