let data = [
  {
    Patient: {
      queryParam: [
        {
          name: "active",
          type: "string",
          exampleValues: ["true", "false"],
        },
        {
          name: "gender",
          type: "string",
          exampleValues: ["male", "Female"],
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
          exampleValues: ["eng", "bzk", "gul"],
        },
      ],
    },
  },
  {
    Practitioner: {
      queryParam: [
        {
          name: "active",
          type: "string",
          exampleValues: ["true", "false"],
        },
        {
          name: "gender",
          type: "string",
          exampleValues: ["male", "Female"],
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
          exampleValues: ["eng", "bzk", "gul"],
        },
      ],
    },
  },
  {
    Condition: {
      queryParam: [
        {
          name: "verfication-status",
          type: "string",
          exampleValues: [
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
    },
  },
  {
    ServiceRequest: {
      queryParam: [
        {
          name: "intent",
          type: "string",
          exampleValues: ["proposal", "plan", "order", "reflex-order"],
        },
        {
          name: "priority",
          type: "string",
          exampleValues: ["routine", "urgent", "asap", "stat"],
        },
        {
          name: "status",
          type: "string",
          exampleValues: [
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
    },
  },
  {
    AllergyIntolerance: {
      queryParam: [
        {
          name: "category",
          type: "string",
          exampleValues: ["food", "biologic", "medication", "environment"],
        },
        {
          name: "clinical-status",
          type: "string",
          exampleValues: ["inactive", "active", "resolved"],
        },
        {
          name: "type",
          type: "string",
          exampleValues: ["allergy", "intolerance"],
        },
        {
          name: "patient",
          type: "string",
        },
      ],
    },
  },
];
