export default function MajorForBackground({ myMajor, setMyMajor }) {
  return (
    <div>
      <h3 className="text-2xl">Which college major sounds the most exciting?</h3>
      <div className="grid grid-cols-2 gap-8 mt-8 text-xl">
        <div>
          <input
            type="radio"
            value="Acolyte"
            id="Acolyte"
            checked={myMajor === "Acolyte"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyMajor(selectedOption);
              console.log(selectedOption);
            }}
            className="hidden"
          />
          <label
            htmlFor="Acolyte"
            className={`cursor-pointer p-2 rounded-md ${
              myMajor === "Acolyte" ? "border-4 border-solid border-ceptor p-2" : ""
            }`}
          >
            Religious Studies
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="Criminal"
            id="Criminal"
            checked={myMajor === "Criminal"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyMajor(selectedOption);
              console.log(selectedOption);
            }}
            className="hidden"
          />
          <label
            htmlFor="Criminal"
            className={`cursor-pointer p-2 rounded-md ${
              myMajor === "Criminal" ? "border-4 border-solid border-ceptor p-2" : ""
            }`}
          >
            Criminology
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="Folk Hero"
            id="Folk Hero"
            checked={myMajor === "Folk Hero"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyMajor(selectedOption);
              console.log(selectedOption);
            }}
            className="hidden"
          />
          <label
            htmlFor="Folk Hero"
            className={`cursor-pointer p-2 rounded-md ${
              myMajor === "Folk Hero" ? "border-4 border-solid border-ceptor p-2" : ""
            }`}
          >
            Social Work
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="Noble"
            id="Noble"
            checked={myMajor === "Noble"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyMajor(selectedOption);
              console.log(selectedOption);
            }}
            className="hidden"
          />
          <label
            htmlFor="Noble"
            className={`cursor-pointer p-2 rounded-md ${
              myMajor === "Noble" ? "border-4 border-solid border-ceptor p-2" : ""
            }`}
          >
            Political Science
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="Sage"
            id="Sage"
            checked={myMajor === "Sage"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyMajor(selectedOption);
              console.log(selectedOption);
            }}
            className="hidden"
          />
          <label
            htmlFor="Sage"
            className={`cursor-pointer p-2 rounded-md ${
              myMajor === "Sage" ? "border-4 border-solid border-ceptor p-2" : ""
            }`}
          >
            Library Science
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="Soldier"
            id="Soldier"
            checked={myMajor === "Soldier"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyMajor(selectedOption);
              console.log(selectedOption);
            }}
            className="hidden"
          />
          <label
            htmlFor="Soldier"
            className={`cursor-pointer p-2 rounded-md ${
              myMajor === "Soldier" ? "border-4 border-solid border-ceptor p-2" : ""
            }`}
          >
            Military Science
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="Outlander"
            id="Outlander"
            checked={myMajor === "Outlander"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyMajor(selectedOption);
              console.log(selectedOption);
            }}
            className="hidden"
          />
          <label
            htmlFor="Outlander"
            className={`cursor-pointer p-2 rounded-md ${
              myMajor === "Outlander" ? "border-4 border-solid border-ceptor p-2" : ""
            }`}
          >
            Environmental Science
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="Entertainer"
            id="Entertainer"
            checked={myMajor === "Entertainer"}
            onChange={e => {
              const selectedOption = e.target.value;
              setMyMajor(selectedOption);
              console.log(selectedOption);
            }}
            className="hidden"
          />
          <label
            htmlFor="Entertainer"
            className={`cursor-pointer p-2 rounded-md ${
              myMajor === "Entertainer" ? "border-4 border-solid border-ceptor p-2" : ""
            }`}
          >
            Performing Arts
          </label>
        </div>
      </div>
    </div>
  );
}
