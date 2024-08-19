
const Header2 = ({ href, children, target = '_self', rel = 'noopener noreferrer', className = '', ...rest  }) => {
  return (
    <div>
       <a href={href} target={target} rel={rel} className={className} {...rest}>
      {children}
       </a>
    </div>
  )
}

export default Header2