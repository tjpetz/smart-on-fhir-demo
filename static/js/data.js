let data = {
  Patient: {
    queryParam: [
      {
        name: "active",
        type: "string",
        value: ["true", "false"],
      },
      {
        name: "gender",
        type: "string",
        value: ["male", "Female"],
      },
      {
        name: "address",
        type: "string",
      },
      {
        name: "name",
        type: "string",
      },
      {
        name: "language",
        type: "string",
        value: ["eng", "bzk", "gul"],
      },
    ],
    displayParam: ["fullName", "gender", "language", "address"],
    fullName: function (queryData) {
      return `Name : ${queryData["name"][0]["given"][0]} ${queryData["name"][0]["family"]}`;
    },
    language: function (queryData) {
      let text = "<br>Language : ";
      if (queryData["communication"] != null) {
        text += queryData["communication"][0]["language"]["coding"]["code"];
      } else {
        text += queryData["communication"];
      }
      return text;
    },
    gender: function (queryData) {
      return "<br>Gender : " + queryData["gender"];
    },
    address: function (queryData) {
      return (
        "<br>Address : " +
        queryData["address"][0]["city"] +
        ", " +
        queryData["address"][0]["state"]
      );
    },
  },
  Practitioner: {
    queryParam: [
      {
        name: "active",
        type: "string",
        value: ["true", "false"],
      },
      {
        name: "gender",
        type: "string",
        value: ["male", "Female"],
      },
      {
        name: "address-city",
        type: "string",
      },
      {
        name: "name",
        type: "string",
      },
      {
        name: "language",
        type: "string",
        value: ["eng", "bzk", "gul"],
      },
    ],
    displayParam: ["fullName", "gender", "language", "address"],
    fullName: function (queryData) {
      return `Name : ${queryData["name"][0]["given"][0]} ${queryData["name"][0]["family"]}`;
    },
    language: function (queryData) {
      let text = "<br>Language : ";
      if (queryData["communication"] != null) {
        text += queryData["communication"][0]["language"]["coding"]["code"];
      } else {
        text += queryData["communication"];
      }
      return text;
    },
    gender: function (queryData) {
      return "<br>Gender : " + queryData["gender"];
    },
    address: function (queryData) {
      return (
        "<br>Address : " +
        queryData["address"][0]["city"] +
        ", " +
        queryData["address"][0]["state"]
      );
    },
  },
  Condition: {
    queryParam: [
      {
        name: "clinical-status",
        type: "string",
        value: ["active"],
      },
      {
        name: "verification-status",
        type: "string",
        value: [
          "unconfirmed",
          "provisional",
          "differential",
          "confirmed",
          "refuted",
          "entered-in-error",
        ],
      },
      {
        name: "patient",
        type: "string",
      },
      {
        name: "onset-date",
        type: "string",
      },
      {
        name: "code",
        type: "string",
      },
      {
        name: "asserter",
        type: "string",
      },
    ],
    displayParam: ["patient", "onSetDate", "code", "asserter"],
    patient: function (queryData) {
      return "Patient : " + queryData["subject"]["reference"];
    },
    onSetDate: function (queryData) {
      return "<br>On-set Date : " + queryData["onsetDateTime"];
    },
    code: function (queryData) {
      return (
        "<br>Code : " +
        queryData["code"]["coding"][0]["system"] +
        " | " +
        queryData["code"]["coding"][0]["code"]
      );
    },
    asserter: function (queryData) {
      let text = "<br>Asserter : ";
      if (queryData["asserter"] != null) {
        text +=
          queryData["asserter"]["type"] +
          " | " +
          queryData["asserter"]["reference"];
      } else {
        text += queryData["asserter"];
      }
      return text;
    },
  },
  ServiceRequest: {
    queryParam: [
      {
        name: "intent",
        type: "string",
        value: ["proposal", "plan", "order", "reflex-order"],
      },
      {
        name: "priority",
        type: "string",
        value: ["routine", "urgent", "asap", "stat"],
      },
      {
        name: "status",
        type: "string",
        value: [
          "draft",
          "active",
          "suspended",
          "completed",
          "entered-in-error",
          "cancelled",
        ],
      },
      {
        name: "encounter",
        type: "string",
      },
    ],
    displayParam: ["status", "priority", "intent", "encounter"],
    status: function (queryData) {
      return "Status : " + queryData["status"];
    },
    priority: function (queryData) {
      return "<br>Priority : " + queryData["priority"];
    },
    intent: function (queryData) {
      return "<br>Intent : " + queryData["intent"];
    },
    encounter: function (queryData) {
      let text = "<br>Encounter : ";
      if (queryData["encounter"] != null) {
        text += `${queryData["encounter"]["type"]} | ${queryData["encounter"]["reference"]}`;
      } else {
        text += queryData["encounter"];
      }
      return text;
    },
  },
  AllergyIntolerance: {
    queryParam: [
      {
        name: "category",
        type: "string",
        value: ["food", "biologic", "medication", "environment"],
      },
      {
        name: "clinical-status",
        type: "string",
        value: ["inactive", "active", "resolved"],
      },
      {
        name: "type",
        type: "string",
        value: ["allergy", "intolerance"],
      },
      {
        name: "patient",
        type: "string",
      },
    ],
    displayParam: ["category", "type", "clinicalStatus", "patient"],
    category: function (queryData) {
      let text = "Category : ";
      for (cat in queryData["category"]) {
        text += queryData["category"][cat] + ", ";
      }
      return text.slice(0, -2);
    },
    type: function (queryData) {
      return "<br>Type : " + queryData["type"];
    },
    clinicalStatus: function (queryData) {
      return (
        "<br>Clinical Status : " +
        queryData["clinicalStatus"]["coding"][0]["code"]
      );
    },
    patient: function (queryData) {
      return "<br>Patient : " + queryData["patient"]["reference"];
    },
  },
};
