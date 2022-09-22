function Element({ array }) {
  return (
    <div className="inline-block flex mx-10 relative justify-center">
      {array.map((ele, ind) => {
        const val = ele + "px";
        return (
          <div key={ind}>
            {/* <p className="bg-blue-100">{ind+1}</p> */}
            <div
              id={ind}
              className="mx-0.5 relative  bg-purple-800 w-5 "
              key={ind}
              style={{ height: `${val}` }}
            ></div>
            <p className="text-black text-xs text-center">{ele}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Element;
