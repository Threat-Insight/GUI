fetch("http://localhost:5000/api/v1/scan/count", {
  method: "GET",
  headers: {
    Origin: "http://localhost:3000", // Invalid Origin
  },
})
  .then((response) => {
    console.log("Response from invalid origin:", response);
  })
  .catch((error) => {
    console.log("Error from invalid origin:", error);
  });
