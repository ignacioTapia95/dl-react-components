const SocialButton = (props) => {
  return (
    <>
        <div className='logos'>
            <a href="https://www.facebook.com" target="_blank"><img src={props.facebook} alt=""/></a>
            <a href="https://www.github.com" target="_blank"><img src={props.github} alt=""/></a>
            <a href="https://www.linkedin.com" target="_blank"><img src={props.linkedin} alt=""/></a>
        </div>
    </>
  );
}

export default SocialButton;