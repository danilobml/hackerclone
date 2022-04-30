import "../../App.css";
const NoResults = ({ userInput }) => {
  return (
    <div className="messages-div">
      <h4>Your search for {userInput} returned no matches.</h4>
    </div>
  );
};

export default NoResults;
