export const MovielistHeading = ({ heading, subheading }) => {
  return (
    <div className="col-lg-6 ml-3">
      <h1 id="main-heading">{heading}</h1>
      <h2>{subheading}</h2>
    </div>
  );
};
