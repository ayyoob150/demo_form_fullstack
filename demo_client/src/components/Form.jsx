import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    residentStreet1: "",
    residentStreet2: "",
    permanentStreet1: "",
    permanentStreet2: "",
  });
  const [uploadData, setUploadData] = useState([
    { id: 1, file: null, fileName: "", type: "" },
  ]);
  const [checked, setChecked] = useState(false);

  const handleFormData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setFormData({
        ...formData,
        permanentStreet1: formData.residentStreet1,
        permanentStreet2: formData.residentStreet2,
      });
    }
  };

  const handleUploadChange = (e, id) => {
    const newInputs = uploadData.map((item) =>
      item.id === id
        ? {
            ...item,
            [e.target.name]:
              e.target.name === "file" ? e.target.files[0] : e.target.value,
          }
        : item
    );
    setUploadData(newInputs);
  };

  const handleRemoveUploadInput = (id) => {
    const remainingInputs = uploadData.filter((item) => item.id !== id);
    setUploadData(remainingInputs);
  };
  const handleAddUploadInput = () => {
    const newId = uploadData[uploadData.length - 1].id + 1;
    setUploadData([
      ...uploadData,
      { id: newId, file: null, fileName: "", type: "" },
    ]);
  };
  return (
    <div>
      <h3 className="text-2xl text-center font-semibold text-slate-800 py-9">
        Candidate's Document Submission Form
      </h3>

      <div className="  md:px-[22%] px-8 bg-[#00000002] rounded pb-4">
        <div className="flex gap-4 justify-between">
          <div className="w-[48%]">
            <div className="mt-4 text-sm font-medium">
              First Name<span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleFormData(e)}
              placeholder="Enter your first name here.."
              className="mt-2 h-[40px] min-w-full w-full border-2 border-gray-400 rounded px-4  text-sm placeholder:text-[#808195]  focus:outline-none"
            />
          </div>
          <div className="w-[48%]">
            <div className="mt-4 text-sm font-medium">
              Last Name<span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleFormData(e)}
              placeholder="Enter your last name here.."
              className="mt-2 h-[40px] min-w-full w-full  border-2 border-gray-400 rounded px-4  text-sm placeholder:text-[#808195]  focus:outline-none"
            />
          </div>
        </div>
        <div className="flex gap-4 justify-between mt-2">
          <div className="w-[48%]">
            <div className="mt-4 text-sm font-medium">
              E-mail<span className="text-red-500">*</span>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleFormData(e)}
              placeholder="ex: myname@example.com"
              className="input-primary"
            />
          </div>
          <div className="w-[48%]">
            <div className="mt-4 text-sm font-medium">
              Date of Birth<span className="text-red-500">*</span>
            </div>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={(e) => handleFormData(e)}
              placeholder="MM/DD/YYYY"
              className="input-primary"
            />
          </div>
        </div>

        <div className="mt-8 text-sm font-medium">Residential Address</div>
        <div className="flex gap-4 justify-between mt-2">
          <div className="w-[48%] mt-1">
            <div className=" text-gray-400 text-xs font-medium">
              Street 1<span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              name="residentStreet1"
              value={formData.residentStreet1}
              onChange={(e) => handleFormData(e)}
              placeholder=""
              className="input-primary"
            />
          </div>
          <div className="w-[48%] mt-1">
            <div className=" text-gray-400 text-xs font-medium">
              Street 2<span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              name="residentStreet2"
              value={formData.residentStreet2}
              onChange={(e) => handleFormData(e)}
              placeholder=""
              className="input-primary"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-9 text-sm font-medium">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
            className=" accent-white rounded px-4  text-sm placeholder:text-slate-800 focus:border accent-border  border"
          />{" "}
          Same as Residential Address
        </div>

        <div className="mt-6 text-sm font-medium">Permanent Address</div>
        <div className="flex gap-4 justify-between mt-2">
          <div className="w-[48%] mt-1">
            <div className=" text-gray-400 text-xs font-medium">Street 1</div>
            <input
              type="text"
              name="permanentStreet1"
              value={formData.permanentStreet1}
              onChange={(e) => handleFormData(e)}
              placeholder=""
              className="input-primary"
              disabled={checked}
            />
          </div>
          <div className="w-[48%] mt-1">
            <div className=" text-gray-400 text-xs font-medium">Street 2</div>
            <input
              type="text"
              name="permanentStreet2"
              value={formData.permanentStreet2}
              onChange={(e) => handleFormData(e)}
              placeholder=""
              className="input-primary"
              disabled={checked}
            />
          </div>
        </div>
        <div className="mt-6">
          <div className="mt-6 text-sm font-medium">Upload Documents</div>
          {uploadData.map((input, index) => (
            <div key={index} className="mt-4 flex items-end gap-2 md:gap-20">
              <div className="-mb-[9px]">
                <div className=" text-gray-400 text-xs font-medium">
                  File Name<span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  name="fileName"
                  value={uploadData[index].fileName}
                  onChange={(e) => handleUploadChange(e, input.id)}
                  className="input-primary min-w-[70px]"
                />
              </div>
              <div className="-mb-[29px] mt-6">
                <div className=" text-gray-400 text-xs font-medium">
                  Type of File<span className="text-red-500">*</span>
                </div>
                <select
                  name="type"
                  value={uploadData[index].type}
                  onChange={(e) => handleUploadChange(e, input.id)}
                  className="input-primary w-[70px] md:w-[170px]"
                >
                  <option value=""></option>
                  <option value="image/*">image</option>
                  <option value=".pdf">pdf</option>
                </select>
                <div className="mt-1 text-gray-400 text-xs font-normal">
                  (img, pdf.)
                </div>
              </div>
              <div className="-mb-[9px]">
                <div className="mb-4 text-gray-400 text-xs font-medium">
                  Upload Document<span className="text-red-500">*</span>
                </div>
                <label className="flex cursor-pointer py-[9px]  input-primary px-1">
                  {input.file && (
                    <div className="w-12 md:w-32  text-nowrap overflow-hidden text-ellipsis">
                      {input?.file?.name}
                    </div>
                  )}
                  <input
                    type="file"
                    className="hidden"
                    name="file"
                    accept={uploadData[index].type}
                    onChange={(e) => handleUploadChange(e, input.id)}
                    disabled={uploadData[index].type === ""}
                  />
                  <img
                    src="assets/upload.png"
                    alt="upload"
                    className={`w-6 h-5 inline ${
                      !input.file && "ml-12 md:ml-32"
                    }`}
                  />
                </label>
              </div>
              {index === 0 ? (
                <button
                  onClick={handleAddUploadInput}
                  className="-mb-1.5 bg-slate-700 text-white px-2 text-3xl font-bold rounded"
                >
                  +
                </button>
              ) : (
                <button
                  className="-mb-1.5"
                  onClick={() => handleRemoveUploadInput(input.id)}
                >
                  <img
                    src="assets/trash.png"
                    alt="remove"
                    className="w-9 h-9 rounded border-2 border-gray-400"
                  />
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button
            onClick={() => console.log(uploadData)}
            className="mt-4  text-2xl px-20 py-3.5 rounded bg-slate-700 text-white font-normal"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
