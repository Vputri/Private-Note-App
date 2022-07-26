const Button = ({ label, eventHandler }) => {
  return (
    <button class="btn btn-primary me-1" type='button' onClick={eventHandler} data-action={label}>
      {label}
    </button>
  );
};

export default Button;