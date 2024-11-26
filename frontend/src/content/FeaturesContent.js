import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const FeaturesContent = (
  <>
    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>URL : </strong> &nbsp; The full
        URL string.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>UrlLength : </strong> &nbsp;
        The length of the entire URL.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>DomainLength : </strong> &nbsp;
        The length of the domain portion of the URL.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>NumOfDots : </strong> &nbsp;
        The number of dots in the URL.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>NumOfHypens : </strong> &nbsp;
        The number of hyphens in the URL.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>NumOfUnderscores : </strong>{" "}
        &nbsp; The number of underscores in the URL.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>NumOfSlashes : </strong> &nbsp;
        The number of slashes in the URL.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>NumOfDigits : </strong> &nbsp;
        The number of digits in the URL.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>
          NumOfSpecialCharacters :{" "}
        </strong>{" "}
        &nbsp; The number of special characters (non-alphanumeric) in the URL.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>NumOfCaptialLetters : </strong>{" "}
        &nbsp; The number of capital letters in the URL.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>NumOfSubdomains : </strong>{" "}
        &nbsp; The number of subdomains in the URL.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>IsDomainIP : </strong> &nbsp;
        Whether the domain is an IP address.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>TLDLength : </strong> &nbsp;
        The length of the top-level domain (TLD).
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>NumOfDirectories : </strong>{" "}
        &nbsp; The number of directories in the URL path.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>PathEntropy : </strong> &nbsp;
        The Shannon entropy of the URL path.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>NumOfParameters : </strong>{" "}
        &nbsp; The number of query parameters in the URL.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>QueryEntropy : </strong> &nbsp;
        The Shannon entropy of the URL query string.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>IsHTTPS : </strong> &nbsp;
        Whether the URL uses HTTPS.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>
          NoOfObusfucatedCharacters :{" "}
        </strong>{" "}
        &nbsp; The number of obfuscated characters in the URL (encoded as
        `%xx`).
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>HasTitle : </strong> &nbsp;
        Whether the URL's webpage has a title.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>Title : </strong> &nbsp; The
        title of the webpage (if available).
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>HasFavicon : </strong> Whether
        the URL's webpage has a favicon.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>HasCopyRightInfo : </strong>{" "}
        &nbsp; Whether the URL's webpage contains copyright information.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>HasURLRedirects : </strong>{" "}
        &nbsp; Whether the URL has redirects.
      </li>
      <br />
      <li style={{ display: "flex", alignItems: "center" }}>
        <IoCheckmarkDoneOutline
          style={{ color: "#66ff66", marginRight: "8px" }}
        />{" "}
        <strong style={{ letterSpacing: "1px" }}>label : </strong> &nbsp; The
        label indicating whether the URL is legitimate or phishing.
      </li>
    </ul>
  </>
);

export default FeaturesContent;
