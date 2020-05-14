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
        value: ["ohio", "SOUTH FAUSTA"],
      },
      {
        name: "name",
        type: "string",
        value: ["HOBESH", "MICHAELSON"],
      },
      {
        name: "language",
        type: "string",
        value: ["eng", "bzk", "gul"],
      },
    ],
    displayParam: ["fullName", "gender", "language", "address"],
    fullName: function (queryData) {
      return `<b>Name</b>: ${queryData["name"][0]["given"][0]} ${queryData["name"][0]["family"]}`;
    },
    language: function (queryData) {
      let text = "<b>Language</b>: ";
      if (queryData["communication"] != null) {
        text += queryData["communication"][0]["language"]["coding"]["code"];
      } else {
        text += queryData["communication"];
      }
      return text;
    },
    gender: function (queryData) {
      return "<b>Gender</b>: " + queryData["gender"];
    },
    address: function (queryData) {
      return (
        "<b>Address</b>: " +
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
        value: ["ohio", "SOUTH FAUSTA"],
      },
      {
        name: "name",
        type: "string",
        value: ["HOBESH", "MICHAELSON"],
      },
      {
        name: "language",
        type: "string",
        value: ["eng", "bzk", "gul"],
      },
    ],
    displayParam: ["fullName", "gender", "language", "address"],
    fullName: function (queryData) {
      return `<b>Name</b>: ${queryData["name"][0]["given"][0]} ${queryData["name"][0]["family"]}`;
    },
    language: function (queryData) {
      let text = "<b>Language</b>: ";
      if (queryData["communication"] != null) {
        text += queryData["communication"][0]["language"]["coding"]["code"];
      } else {
        text += queryData["communication"];
      }
      return text;
    },
    gender: function (queryData) {
      return "<b>Gender</b>: " + queryData["gender"];
    },
    address: function (queryData) {
      return (
        "<b>Address</b>: " +
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
        value: ["active", "inactive"],
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
        value: ["45bc477f-8656-437b-b03a-74923a64efb0"],
      },
      {
        name: "onset-date",
        type: "string",
        value: ["2005-03-15 00:00:00"],
      },
      {
        name: "code",
        type: "string",
        value: ["4406004"],
      },
      {
        name: "asserter",
        type: "string",
        value: ["4d618250-3ff3-4911-bca3-dac1bf464758"],
      },
    ],
    displayParam: ["patient", "onSetDate", "code", "asserter"],
    patient: function (queryData) {
      return "<b>Patient</b>: " + queryData["subject"]["reference"];
    },
    onSetDate: function (queryData) {
      return "<b>On-set Date</b>: " + queryData["onsetDateTime"];
    },
    code: function (queryData) {
      return (
        "<b>Code</b>: " +
        queryData["code"]["coding"][0]["system"] +
        " | " +
        queryData["code"]["coding"][0]["code"]
      );
    },
    asserter: function (queryData) {
      let text = "<b>Asserter</b>: ";
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
        value: ["16b98bb9-c9b9-4e15-9feb-77006cf304d9"],
      },
    ],
    displayParam: ["status", "priority", "intent", "encounter"],
    status: function (queryData) {
      return "<b>Status</b>: " + queryData["status"];
    },
    priority: function (queryData) {
      return "<b>Priority</b>: " + queryData["priority"];
    },
    intent: function (queryData) {
      return "<b>Intent</b>: " + queryData["intent"];
    },
    encounter: function (queryData) {
      let text = "<b>Encounter</b>: ";
      if (queryData["encounter"] != null) {
        text += `${queryData["encounter"]["reference"]}`;
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
        value: ["45bc477f-8656-437b-b03a-74923a64efb0"],
      },
    ],
    displayParam: ["category", "type", "clinicalStatus", "patient"],
    category: function (queryData) {
      let text = "<b>Category</b>: ";
      for (cat in queryData["category"]) {
        text += queryData["category"][cat] + ", ";
      }
      return text.slice(0, -2);
    },
    type: function (queryData) {
      return "<b>Type</b>: " + queryData["type"];
    },
    clinicalStatus: function (queryData) {
      return (
        "<b>Clinical Status</b>: " +
        queryData["clinicalStatus"]["coding"][0]["code"]
      );
    },
    patient: function (queryData) {
      return "<b>Patient</b>: " + queryData["patient"]["reference"];
    },
  },
};
