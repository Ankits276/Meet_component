const MeetingUserlist = (data1: any) => {
  const {image, name, label} = data1;
  return (
    <div style={{margin: "10px"}}>
      <div style={{padding: "20px", border: "1px solid silver"}}>
        <img width={100} src={image} alt={label} />
      </div>
      <div style={{marginTop: "20px"}}>
        <a href={name}>{label}</a>
      </div>
    </div>
  );
};

export default MeetingUserlist;
