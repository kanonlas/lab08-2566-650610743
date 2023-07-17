export const Footer = (props) => {
  <div className="mt-3">
    <p className="text-secondary text-center">
      <>
        copyright © 2023 {props.year}
        {props.fullName}
        {props.studentId}
      </>
    </p>
  </div>;
};
