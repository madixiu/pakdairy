

function Corporate() {
  return ( 
    <div>
     <div className="block md:hidden">
    This div is shown on mobile and hidden on medium screens and larger.
</div>

<div className="hidden lg:block">
        This div is hidden on mobile and tablet, but shown on large screens and larger.
    </div>
    </div>
   );
}

export default Corporate;