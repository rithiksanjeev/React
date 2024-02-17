import React from "react";

function Footer() {
  // conditional rendering
  const subject1 = 75;
  const subject2 = 35;
  return (
    <footer>
      Made in india
      {subject1 > 40 && <div>PASS</div>}
      {subject2 > 40 ? <p>PASS</p> : <p>FAIL</p>}
    </footer>
  );
}

export default Footer;
