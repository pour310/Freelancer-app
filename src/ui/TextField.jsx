function TextField({ value, onChange, label, name }) {
  console.log(value);
  return (
    <div>
      <form className=" space-y-8">
        <div>
          <label htmlFor={name} className="mb-2 block">
            {label}
          </label>
          <input
            value={value}
            onChange={onChange}
            id={name}
            type="text"
            className="textField__input"
            autoComplete="off"
          />
        </div>
        <button className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default TextField;
