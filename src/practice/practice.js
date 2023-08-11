const multipleUserDatalist = [
  {
    id: "1",
    details: [
      {
        desc: "We need feature to view our statements not of only few months but of more than 1 year",
        field: "Financial Statement View",
        status: "Pending",
        startingDate: "2020-08-01",
        endingDate: "",
        feasible: "Yes",
        payment: "100",
        acceptance: "Yes",
        sorryMessage: "",
        solvingtime: "2020-09-06",
        approval: "Pending",
        renegotiateAmount: "90",
        completionMessage: "Your feature is added",
        requirement: [],
      },
      {
        desc: "We require phone loan feature in our mobile banking. As other banks are now offering this facility.",
        field: "Phone Loan ",
        status: "New",
        startingDate: "2023-07-07",
        endingDate: "",
        feasible: "Yes",
        solvingtime: "",
        payment: "",
        acceptance: "",
        sorryMessage: "",
        approval: "Pending",
        renegotiateAmount: "",
        completionMessage: "",
        requirement: ["PhoneLoanRequirement.pdf"],
      },
      {
        desc: "real time notification on balance change",
        field: "Notification on balance update.",
        status: "New",
        startingDate: "2023-07-17",
        endingDate: "",
        feasible: "",
        solvingtime: "",
        payment: "",
        acceptance: "",
        sorryMessage: "",
        approval: "Pending",
        renegotiateAmount: "",
        completionMessage: "",
        requirement: ["anu-srest-cv.pdf"],
      },
    ],
  },
  {
    id: "2",
    details: [
      {
        desc: "description of issue is given here Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        field: "education",
        status: "Pending",
        startingDate: "2023-05-10",
        endingDate: "2023-05-26",
        feasible: "Yes",
        solvingtime: "2023-05-25",
        payment: "200",
        acceptance: "Yes",
        sorryMessage: "",
        completionMessage:
          "sorry we are late by 1 day as estimated but your feature has been updated.",
      },
    ],
  },
  {
    id: "100",
    details: [
      {
        desc: "Feri try gareko maile hai abatah milla ki entry bhaeni",
        field: "Feri try gareko",
        status: "Pending",
        startingDate: "2023-05-23",
        endingDate: "",
        feasible: "Yes",
        solvingtime: "2023-08-17",
        payment: "500",
        acceptance: "Yes",
        sorryMessage: "",
        completionMessage: "",
        requirement: ["Upload Requirement File"],
      },
      {
        desc: "Help me i am QA BUT I DON'T KNOW WHAT IS QA.....",
        field: "QA full form",
        status: "Pending",
        startingDate: "2023-05-26",
        endingDate: "",
        feasible: "Yes",
        solvingtime: "2023-08-15",
        payment: "450",
        acceptance: "Yes",
        sorryMessage: "",
        completionMessage: "",
        requirement: ["Upload Requirement File"],
      },
      {
        desc: "Chhurpi khada khada mero daath le thau chodna lagyo hai.",
        field: "Daath Dhukhing",
        status: "Pending",
        startingDate: "2023-05-26",
        endingDate: "",
        feasible: "Yes",
        solvingtime: "",
        payment: "",
        acceptance: "Yes",
        sorryMessage: "",
        completionMessage: "",
        requirement: ["Upload Requirement File"],
      },
    ],
  },
  {
    id: "30",
    details: [
      {
        desc: "hello",
        field: "chhurpi",
        status: "New",
        startingDate: "2023-05-22",
        endingDate: "",
        feasible: "",
        solvingtime: "",
        payment: "",
        acceptance: "",
        sorryMessage: "",
        completionMessage: "",
        requirement: ["Upload Requirement File"],
      },
      {
        desc: "naya from kajal",
        field: "Chhurpi sakiyo",
        status: "New",
        startingDate: "2023-05-24",
        endingDate: "",
        feasible: "",
        solvingtime: "",
        payment: "",
        acceptance: "",
        sorryMessage: "",
        completionMessage: "",
        requirement: ["Upload Requirement File", "Upload Requirement File"],
      },
    ],
  },
  {
    id: "tb3pu2u",
    details: [
      {
        desc: "We need phone loan feature in our mobile banking.",
        field: "Phone Loan ",
        status: "New",
        startingDate: "2023-05-25",
        endingDate: "",
        feasible: "",
        solvingtime: "",
        payment: "",
        acceptance: "",
        sorryMessage: "",
        completionMessage: "",
        requirement: ["phoneloanrequirement.pdf"],
      },
      {
        desc: "We want bold font size of the amount.",
        field: "Increase in fontsize of the balance amount in mobile baking.",
        status: "Rejected",
        startingDate: "2023-05-26",
        endingDate: "",
        feasible: "Yes",
        solvingtime: "",
        payment: "",
        acceptance: "No",
        sorryMessage: "",
        completionMessage: "",
        requirement: ["Unit 4-Object Oriented Database Systems.pdf"],
      },
    ],
  },
  {
    id: "QfGlqxL",
    details: [
      {
        desc: "We require a phone loan feature in our mobile banking. As other banks are now offering this facility.",
        field: "PhoneLoan",
        status: "New",
        startingDate: "2023-06-20",
        endingDate: "",
        feasible: "Yes",
        solvingtime: "2023-07-10",
        payment: "",
        acceptance: "",
        sorryMessage: "",
        completionMessage: "",
        requirement: ["sample.pdf"],
      },
    ],
  },
];

const result = multipleUserDatalist.map((item) => {
  return item.details;
});

const idOfUser = result.findIndex((item) =>
  item.some((obj) => obj["field"] === "PhoneLoan")
);
console.log(result);
console.log(idOfUser);
const subresult = result.flatMap((item) => item);

const array1 = [
  [1, 23, 4],
  [23, 53, 76],
];
// console.log(array1.findIndex((item) => item.includes(76)));

const objArray = [
  [
    {
      name: "suraj",
    },
    { name: "manju" },
  ],
  [
    {
      name: "yamima",
    },
    {
      name: "suman",
    },
  ],
];
const username = "suraj";
// console.log(objArray.findIndex((item) => item.includes(username)));
const foundIndex = objArray.findIndex((innerArray) =>
  innerArray.some((obj) => obj["name"] === "suman")
);
// console.log(foundIndex);

const arr = [{ name: "suraj", post: "React Developer" }];
console.log(arr.flatMap((item)=>item));
