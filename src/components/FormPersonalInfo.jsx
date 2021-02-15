import Header from "./Header";

const FormPersonalInfo = ({ handleChange, nextStep, values, step }) => {
  const forward = (e) => {
    e.preventDefault();
    nextStep();
  };
  console.log(step)
  return (
    <>
      <Header step={step} color={"orange"} />
      <div className="p-info-wrapper">
        <div className="form">
          <div className="form-item">
            <label>Name </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
              className="form-input"
            />
          </div>
          <div className="form-item">
            <label>
              Email Address <sup>*</sup>
            </label>
            <p className="email-noti">
              The purchase receipt would be sent to the address
            </p>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              className="form-input"
            />
          </div>
          <div className="form-item">
            <label>Address 1</label>
            <input
              type="text"
              name="address1"
              onChange={handleChange}
              value={values.address1}
              className="form-input"
            />
          </div>
          <div className="form-item">
            <label>Address 2 </label>
            <input
              type="text"
              name="address2"
              onChange={handleChange}
              value={values.address2}
              className="form-input"
            />
          </div>
          <div className="flex-input-2">
            <div style={{ width: "100%" }}>
              <label>Local Government </label>
              <input
                type="text"
                name="localGovt"
                onChange={handleChange}
                value={values.localGovt}
                className="form-input"
              />
            </div>
            <div style={{ marginLeft: "3.5rem", width: "50%" }}>
              <label>State </label>
              <select
                name="stat"
                onChange={handleChange}
                style={{ padding: ".4rem", height: "2.3rem" }}
                className="form-input"
              >
                <option value="Lagos"> Lagos </option>
              </select>
            </div>
          </div>{" "}
          <br />
          <div className="action-buttons">
            <div className="next">
              <button onClick={forward} className="next-button">
                Next
              </button>
            </div>
            <div className="cancel">
              <button className="cancel-button">Cancel Payment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPersonalInfo;
