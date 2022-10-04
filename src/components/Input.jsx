import React, {  useState, useRef } from "react";
import { MomentInput } from "react-moment-input";
import {
  BsFillExclamationTriangleFill,
  // BsFillExclamationCircleFill,
} from "react-icons/bs";

const styles = {
  normal: "w-full border border-grey-400 rounded-sm h-12 py-2 pl-4",
  error: "w-full border border-alert-red rounded-sm h-12 py-2 pl-4",
  errorLabel: "text-alert-red text-[14px]",
  label: "text-grey-600  text-[14px]",
};
const Input = ({
  label,
  placeholder,
  attention,
  info,
  pattern,
  name,
  handleChange,
  // handleImage,
  value,
  type,
}) => {
  const [empty, setEmpty] = useState(false);
  const inputRef = useRef(null);
  const handleFocus = (e) => {
    setEmpty(false);
  };
  const handleBlur = () => {
    if (inputRef.current.value) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  };
  return (
    <div className="flex relative w-full flex-col">
      <div className="AS1 flex flex-col w-full">
        <label className={empty ? styles.errorLabel : styles.label}>
          {label}
        </label>
        <input
          type={type}
          pattern={pattern}
          // type=""
          className={empty ? styles.error : styles.normal}
          placeholder={placeholder}
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          onChange={handleChange}
          value={value}
        />
      </div>
      {empty ? <Empty /> : <Info info={info} />}
      {attention && <Attention message={attention} />}
    
    </div>
  );
};

const Attention = ({ message }) => {
  return (
    <div className="rounded-md bg-yellow-50 p-4 mt-2">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <BsFillExclamationTriangleFill
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <div className=" text-sm text-yellow-700">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
// const Caution = ({ message }) => {
//   return (
//     <div className="rounded-md bg-[#ff87871a] p-4 mt-2">
//       <div className="flex items-start">
//         <div className="flex-shrink-0">
//           <BsFillExclamationCircleFill
//             className="h-5 w-5 text-alert-red"
//             aria-hidden="true"
//           />
//         </div>
//         <div className="ml-3">
//           <div className=" text-sm text-alert-red">
//             <p>{message}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const Empty = () => {
  return (
    <div className="rounded-md bg-alert-pink bg-opacity-50 p-2 mt-2">
      <div className="flex items-start">
        <div className=" text-sm text-alert-red">
          <p>Please fill out this field</p>
        </div>
      </div>
    </div>
  );
};
const Info = ({ info }) => {
  return (
    <>
      {info && (
        <div className="rounded-md bg-s-purple-2 p-2 mt-2">
          <div className="flex items-start">
            <div className=" text-sm text-purpleLight">
              <p>{info}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
