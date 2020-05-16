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
    displayParam: [
      "fullName",
      "gender",
      "age",
      "maritalStatus",
      "language",
      "address",
    ],
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
    maritalStatus: function (queryData) {
      return "<b>Marital Status</b>: " + queryData["maritalStatus"];
    },
    age: function (queryData) {
      return "<b>Date of Birth</b>: " + queryData["birthDate"];
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
    displayParam: [
      "fullName",
      "gender",
      "age",
      "maritalStatus",
      "language",
      "address",
    ],
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
    maritalStatus: function (queryData) {
      return "<b>Marital Status</b>: " + queryData["maritalStatus"];
    },
    age: function (queryData) {
      return "<b>Date of Birth</b>: " + queryData["birthDate"];
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
      {
        name: "subject",
        type: "string",
        value: ["Patient/f57e781a-5885-4f82-aeda-b742d1871545"],
      },
      {
        name: "encounter",
        type: "string",
        value: ["Encounter/4a637ab4-b7bf-4715-b2e4-cc45a0379f0b"],
      },
    ],
    displayParam: [
      "patient",
      "onSetDate",
      "code",
      "asserter",
      "subject",
      "encounter",
    ],
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
    subject: function (queryData) {
      return (
        "<b>Subject</b>: " +
        queryData["subject"]["type"] +
        "/" +
        queryData["subject"]["reference"]
      );
    },
    encounter: function (queryData) {
      let encounterValue;
      if (queryData["encounter"] == null) encounterValue = "null";
      else
        encounterValue =
          queryData["encounter"]["type"] +
          "/" +
          queryData["encounter"]["reference"];
      return "<b>Encounter</b>: " + encounterValue;
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
      {
        name: "severity",
        type: "string",
        value: ["mild"],
      },
      {
        name: "verification-status",
        type: "string",
        value: ["AllergyIntoleranceVerificationStatusCodes|confirmed"],
      },
    ],
    displayParam: [
      "category",
      "type",
      "clinicalStatus",
      "patient",
      "severity",
      "verificationStatus",
    ],
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
    severity: function (queryData) {
      if (queryData["reaction"] == null) {
        return "<b>Severity</b>: " + queryData["reaction"];
      }
      return "<b>Severity</b>: " + queryData["reaction"]["severity"];
    },
    verificationStatus: function (queryData) {
      return (
        "<b>verificationStatus</b>: " +
        queryData["verificationStatus"]["coding"][0]["system"] +
        "|" +
        queryData["verificationStatus"]["coding"][0]["display"]
      );
    },
  },
  Appointment: {
    queryParam: [
      {
        name: "date",
        type: "string",
        value: ["eq2015-06-28"],
      },
      {
        name: "actor",
        type: "string",
        value: ["Patient/cea0b74f-078c-4506-a638-35e7d5cc0866"],
      },
      {
        name: "appointment-type",
        type: "string",
        value: ["2JBD39X6LO"],
      },
      {
        name: "based-on",
        type: "string",
        value: ["ServiceRequest/eca516f6-0712-4b68-ad66-eff4e8860230"],
      },
      {
        name: "status",
        type: "string",
        value: ["ARRIVED"],
      },
    ],
    displayParam: [
      "appointmentDate",
      "actor",
      "appointmentType",
      "basedOn",
      "status",
    ],
    appointmentDate: function (queryData) {
      return `<b>AppointmentDate</b>: ${queryData["start"]}`;
    },
    actor: function (queryData) {
      let text = `<b>Actor</b>:`;
      if (queryData["participant"][0]["actor"] != null) {
        text += `${queryData["participant"][0]["actor"]["type"]}/${queryData["participant"][0]["actor"]["reference"]}`;
      } else {
        text += queryData["participant"][0]["actor"];
      }
      return text;
    },
    appointmentType: function (queryData) {
      return `<b>appointmentType</b>: ${queryData["appointmentType"]["coding"][0]["code"]}`;
    },
    basedOn: function (queryData) {
      let text = `<b>basedOn</b>:`;
      if (queryData["basedOn"] != null) {
        text += `${queryData["basedOn"][0]["type"]}/${queryData["basedOn"][0]["reference"]}`;
      } else {
        text += queryData["basedOn"];
      }
      return text;
    },
    status: function (queryData) {
      return `<b>Status</b>: ${queryData["status"]}`;
    },
  },
  ClinicalImpression: {
    queryParam: [
      {
        name: "subject",
        type: "string",
        value: ["Patient/cea0b74f-078c-4506-a638-35e7d5cc0866"],
      },
      {
        name: "status",
        type: "string",
        value: ["completed"],
      },
      {
        name: "problem",
        type: "string",
        value: ["Condition/4fa9d407-c07b-4ab8-a163-1d9e699cb15e"],
      },
      {
        name: "investigation",
        type: "string",
        value: ["QuestionnaireResponse/6a6f052f-d57c-4a8c-ac12-54d6bc1d4506"],
      },
      {
        name: "date",
        type: "string",
        value: ["2010-10-09 00:00:00"],
      },
      {
        name: "assessor",
        type: "string",
        value: ["PractitionerRole/bf7eb686-5155-4bc4-9047-0a30baa4d3ea"],
      },
    ],
    displayParam: [
      "subject",
      "status",
      "problem",
      "investigation",
      "date",
      "assessor",
    ],
    subject: function (queryData) {
      return `<b>Subject</b>: ${queryData["subject"]["type"]}/ ${queryData["subject"]["reference"]}`;
    },
    status: function (queryData) {
      return "<b>Status</b>: " + queryData["status"];
    },
    problem: function (queryData) {
      let text = `<b>Problem</b>: `;
      if (queryData["problem"] != null) {
        text += `${queryData["problem"][0]["type"]}/ ${queryData["problem"][0]["reference"]}`;
      } else {
        text += queryData["problem"];
      }
      return text;
    },
    investigation: function (queryData) {
      let text = `<b>Investigation</b>: `;
      if (queryData["investigation"] == null) {
        text += queryData["investigation"];
      } else if (queryData["investigation"][0]["item"] == null) {
        text += queryData["investigation"][0]["item"];
      } else {
        text += `${queryData["investigation"][0]["item"]["type"]}/ ${queryData["investigation"][0]["item"]["reference"]}`;
      }
      return text;
    },
    date: function (queryData) {
      return "<b>Date</b>: " + queryData["date"];
    },
    assessor: function (queryData) {
      let text = `<b>Assessor</b>: `;
      if (queryData["assessor"] != null) {
        text += `${queryData["assessor"]["type"]}/ ${queryData["assessor"]["reference"]}`;
      } else {
        text += queryData["assessor"];
      }
      return text;
    },
  },
  Coverage: {
    queryParam: [
      {
        name: "beneficiary",
        type: "string",
        value: ["Patient/b561f4ef-07f5-472e-afbd-3e1810ca20fc"],
      },
      {
        name: "patient",
        type: "string",
        value: ["Patient/b561f4ef-07f5-472e-afbd-3e1810ca20fc"],
      },
      {
        name: "policy-holder",
        type: "string",
        value: ["RelatedPerson/bc4d260e-7245-4bd4-8af0-08223956f6c2"],
      },
      {
        name: "subscriber",
        type: "string",
        value: ["RelatedPerson/2c453b5c-2182-471d-82c4-2d4f9cfdad37"],
      },
      {
        name: "payor",
        type: "string",
        value: ["Organization/1a2bcd34-5ef6-7ghi-jklm-89nopqrstuvw"],
      },
      {
        name: "class-type",
        type: "string",
        value: ["BEM4T1450O"],
      },
    ],
    displayParam: [
      "beneficiary",
      "patient",
      "policyHolder",
      "subscriber",
      "payor",
      "classType",
    ],
    beneficiary: function (queryData) {
      return `<b>Beneficiary</b>: ${queryData["beneficiary"]["type"]}/${queryData["beneficiary"]["reference"]}`;
    },
    patient: function (queryData) {
      return `<b>Patient</b>: ${queryData["beneficiary"]["type"]}/${queryData["beneficiary"]["reference"]}`;
    },
    payor: function (queryData) {
      return `<b>Payor</b>: ${queryData["payor"][0]["type"]}/${queryData["payor"][0]["reference"]}`;
    },
    policyHolder: function (queryData) {
      let text = `<b>PolicyHolder</b>:`;
      if (queryData["policyHolder"] != null) {
        text += `${queryData["policyHolder"]["type"]}/ ${queryData["policyHolder"]["reference"]}`;
      } else {
        text += queryData["policyHolder"];
      }
      return text;
    },
    subscriber: function (queryData) {
      let text = `<b>Subscriber</b>:`;
      if (queryData["subscriber"] != null) {
        text += `${queryData["subscriber"]["type"]}/ ${queryData["subscriber"]["reference"]}`;
      } else {
        text += queryData["subscriber"];
      }
      return text;
    },
    classType: function (queryData) {
      let text = `<b>class-type</b>:`;
      if (queryData["_class"] != null) {
        text += `${queryData["_class"][0]["type"]["coding"][0]["code"]}`;
      } else {
        text += queryData["_class"];
      }
      return text;
    },
  },
  Medication: {
    queryParam: [
      {
        name: "status",
        type: "string",
        value: ["active", "inactive"],
      },
      {
        name: "manufacturer",
        type: "string",
        value: ["54fff4b7-fc16-4235-bf57-14a61fa303d0"],
      },
    ],
    displayParam: [
      "display",
      "status",
      "manufacturer",
      "identifier",
      "code",
      "form",
    ],
    display: function (queryData) {
      return "<b>Display</b>: " + queryData["code"]["coding"][0]["display"];
    },
    code: function (queryData) {
      return (
        "<b>Code</b>: " +
        queryData["code"]["coding"][0]["code"] +
        " | " +
        queryData["code"]["coding"][0]["system"][0] +
        " | " +
        queryData["code"]["coding"][0]["version"]
      );
    },
    form: function (queryData) {
      return (
        "<b>Form</b>: " +
        queryData["form"]["coding"][0]["code"] +
        " | " +
        queryData["form"]["coding"][0]["system"][0] +
        " | " +
        queryData["form"]["coding"][0]["version"]
      );
    },
    status: function (queryData) {
      return "<b>Status</b>: " + queryData["status"];
    },
    manufacturer: function (queryData) {
      return "<b>Manufacturer</b>: " + queryData["manufacturer"]["reference"];
    },
    identifier: function (queryData) {
      return (
        "<b>Identifier</b>: " +
        queryData["identifier"][0]["value"] +
        " | " +
        queryData["identifier"][0]["system"][0]
      );
    },
  },
  MedicationAdministration: {
    queryParam: [
      {
        name: "status",
        type: "string",
        value: ["completed", "active", "inactive"],
      },
      {
        name: "subject",
        type: "string",
        value: ["Patient/b561f4ef-07f5-472e-afbd-3e1810ca20fc"],
      },
      {
        name: "request",
        type: "string",
        value: ["MedicationRequest/1d07fb9f-d0fe-493f-bbb2-8b24958e6eb5"],
      },
      {
        name: "performer",
        type: "string",
        value: ["PractitionerRole/19752cbd-236a-4a9b-9d84-1016e1370bac"],
      },
      {
        name: "context",
        type: "string",
        value: ["Encounter/de13f39d-c4a0-47fe-8fa1-cf761b5d3532"],
      },
    ],
    displayParam: [
      "subject",
      "reasonCode",
      "status",

      "statusReason",

      "context",
      "medicationReference",
    ],
    status: function (queryData) {
      return "<b>Status</b>: " + queryData["status"];
    },
    subject: function (queryData) {
      return (
        "<b>Subject</b>: " +
        queryData["subject"]["type"] +
        "/" +
        queryData["subject"]["reference"]
      );
    },
    reasonCode: function (queryData) {
      if (queryData["reasonCode"] != null)
        return (
          "<b>Reason Code</b>: " +
          queryData["reasonCode"][0]["coding"][0]["code"] +
          " | " +
          queryData["reasonCode"][0]["coding"][0]["system"][0] +
          " | " +
          queryData["reasonCode"][0]["coding"][0]["version"]
        );
      else {
        return "<b>Reason Code</b>:" + queryData["reasonCode"];
      }
    },

    context: function (queryData) {
      if (queryData["context"] != null)
        return (
          "<b>Context</b>: " +
          queryData["context"]["type"] +
          " | " +
          queryData["context"]["reference"]
        );
      else return `<b>Context</b>: ` + queryData["context"];
    },
    statusReason: function (queryData) {
      return (
        "<b>Status Reason</b>: " +
        queryData["statusReason"][0]["coding"][0]["code"] +
        " | " +
        queryData["statusReason"][0]["coding"][0]["system"][0] +
        " | " +
        queryData["statusReason"][0]["coding"][0]["version"]
      );
    },

    medicationReference: function (queryData) {
      if (queryData["medicationReference"] != null)
        return (
          "<b>Medication Reference</b>: " +
          queryData["medicationReference"]["type"] +
          " | " +
          queryData["medicationReference"]["reference"]
        );
      else {
        return (
          "<b>Medication Reference</b>: " + queryData["medicationReference"]
        );
      }
    },
  },

  MedicationDispense: {
    queryParam: [
      {
        name: "status",
        type: "string",
        value: ["on-hold", "active", "inactive"],
      },
      {
        name: "subject",
        type: "string",
        value: ["Patient/cea0b74f-078c-4506-a638-35e7d5cc0866"],
      },
      {
        name: "reciever",
        type: "string",
        value: ["PractitionerRole/0da56f46-df32-4489-b740-1d0084b642ad"],
      },
      {
        name: "responsibleparty",
        type: "string",
        value: ["PractitionerRole/0ff801f3-944a-45ae-a572-b249fc40bd22"],
      },
      {
        name: "prescription",
        type: "string",
        value: ["MedicationRequest/a828b2a0-97de-4ce6-9bac-46a129470956"],
      },
      {
        name: "destination",
        type: "string",
        value: ["Location/5823894b-e4f3-4c36-bcdc-81fe90484c67"],
      },
      {
        name: "context",
        type: "string",
        value: ["Encounter/4370141b-0f18-4905-b342-8501a840767e"],
      },
    ],
    displayParam: [
      "subject",
      "daysSupply",
      "status",
      "statusReason",
      "context",

      "medicationCodeableConcept",
    ],
    subject: function (queryData) {
      return (
        "<b>Subject</b>: " +
        queryData["subject"]["type"] +
        "/" +
        queryData["subject"]["reference"]
      );
    },
    statusReason: function (queryData) {
      return (
        "<b>Status Reason</b>: " +
        queryData["statusReasonCodeableConcept"]["coding"][0]["code"] +
        " | " +
        queryData["statusReasonCodeableConcept"]["coding"][0]["system"][0] +
        " | " +
        queryData["statusReasonCodeableConcept"]["coding"][0]["version"]
      );
    },
    context: function (queryData) {
      if (queryData["context"] != null)
        return (
          "<b>Context</b>: " +
          queryData["context"]["type"] +
          " | " +
          queryData["context"]["reference"]
        );
      else return `<b>Context</b>: ` + null;
    },
    status: function (queryData) {
      return "<b>Status</b>: " + queryData["status"];
    },
    daysSupply: function (queryData) {
      return "<b>Days Supply</b>: " + queryData["daysSupply"]["value"];
    },
    medicationCodeableConcept: function (queryData) {
      return (
        "<b>Medication Code</b>: " +
        queryData["medicationCodeableConcept"]["coding"][0]["code"] +
        " | " +
        queryData["medicationCodeableConcept"]["coding"][0]["system"][0] +
        " | " +
        queryData["medicationCodeableConcept"]["coding"][0]["version"]
      );
    },
  },
  DeviceRequest: {
    queryParam: [
      {
        name: "status",
        type: "string",
        value: ["active", "inactive", "resolved"],
      },
      {
        name: "subject",
        type: "string",
        value: ["Patient/b561f4ef-07f5-472e-afbd-3e1810ca20fc"],
      },
      {
        name: "encounter",
        type: "string",
        value: ["Encounter/212e29e4-8a5d-4fd7-825e-0a59d3dcb9b5"],
      },
      {
        name: "requester",
        type: "string",
        value: ["PractitionerRole/a9a2cf76-56fa-4cfb-8294-5d19d74a485b"],
      },
      {
        name: "performer",
        type: "string",
        value: ["PractitionerRole/4d618250-3ff3-4911-bca3-dac1bf464758"],
      },
      {
        name: "insurance",
        type: "string",
        value: ["Coverage/cb99823a-fb25-40b8-bcee-16e312308de7", "null"],
      },
    ],
    displayParam: [
      "subject",
      "encounter",
      "status",
      "requester",
      "performer",
      "insurance",
    ],
    subject: function (queryData) {
      return (
        "<b>Subject</b>: " +
        queryData["subject"]["type"] +
        "/" +
        queryData["subject"]["reference"]
      );
    },
    encounter: function (queryData) {
      let encounterValue;
      if (queryData["encounter"] == null) encounterValue = "null";
      else
        encounterValue =
          queryData["encounter"]["type"] +
          "/" +
          queryData["encounter"]["reference"];
      return "<b>Encounter</b>: " + encounterValue;
    },
    status: function (queryData) {
      return "<b>Status</b>: " + queryData["status"];
    },
    requester: function (queryData) {
      let requesterValue;
      if (queryData["requester"] == null) requesterValue = "null";
      else
        requesterValue =
          queryData["requester"]["type"] +
          "/" +
          queryData["requester"]["reference"];
      return "<b>Requester</b>: " + requesterValue;
    },
    performer: function (queryData) {
      let performerValue;
      if (queryData["performer"] == null) performerValue = "null";
      else
        insuranceValue =
          queryData["performer"]["type"] +
          "/" +
          queryData["performer"]["reference"];
      return "<b>Performer</b>: " + performerValue;
    },
    insurance: function (queryData) {
      let insuranceValue;
      if (queryData["insurance"] == null) insuranceValue = "null";
      else
        insuranceValue =
          queryData["insurance"][0]["type"] +
          "/" +
          queryData["insurance"][0]["reference"];
      return "<b>Insurance</b>: " + insuranceValue;
    },
  },
  DocumentReference: {
    queryParam: [
      {
        name: "status",
        type: "string",
        value: ["current", "entered-in-error", "superseded"],
      },
      {
        name: "subject",
        type: "string",
        value: ["Patient/cea0b74f-078c-4506-a638-35e7d5cc0866"],
      },
      {
        name: "date",
        type: "string",
        value: ["2006-08-13 00:00:00"],
      },
      {
        name: "relatesto",
        type: "string",
        value: ["DocumentReference/5c6a80a7-96de-4151-8660-471dd2a9d24c"],
      },
      {
        name: "custodian",
        type: "string",
        value: ["Organization/1a2bcd34-5ef6-7ghi-jklm-89nopqrstuvw"],
      },
      {
        name: "authenticator",
        type: "string",
        value: ["PractitionerRole/929bde5c-1749-4dee-9382-3d58220793e8"],
      },
    ],
    displayParam: [
      "subject",
      "date",
      "status",
      "relatesto",
      "custodian",
      "authenticator",
    ],
    subject: function (queryData) {
      return (
        "<b>Subject</b>: " +
        queryData["subject"]["type"] +
        "/" +
        queryData["subject"]["reference"]
      );
    },
    date: function (queryData) {
      return "<b>Date</b>: " + queryData["date"];
    },
    status: function (queryData) {
      return "<b>Status</b>: " + queryData["status"];
    },
    relatesto: function (queryData) {
      let relatedValue;
      if (queryData["relatesTo"] == null) relatedValue = "null";
      else
        relatedValue =
          queryData["relatesTo"][0]["target"]["type"] +
          "/" +
          queryData["relatesTo"][0]["target"]["reference"];
      return "<b>RelatesTo</b>: " + relatedValue;
    },
    custodian: function (queryData) {
      let custodianValue;
      if (queryData["custodian"] == null) custodianValue = "null";
      else
        custodianValue =
          queryData["custodian"]["type"] +
          "/" +
          queryData["custodian"]["reference"];
      return "<b>Custodian</b>: " + custodianValue;
    },
    authenticator: function (queryData) {
      let authenticatorValue;
      if (queryData["authenticator"] == null) authenticatorValue = "null";
      else
        authenticatorValue =
          queryData["authenticator"]["type"] +
          "/" +
          queryData["authenticator"]["reference"];
      return "<b>Authenticator</b>: " + authenticatorValue;
    },
  },
  Encounter: {
    queryParam: [
      {
        name: "status",
        type: "string",
        value: ["finished", "cancelled", "onleave"],
      },
      {
        name: "subject",
        type: "string",
        value: ["Patient/cea0b74f-078c-4506-a638-35e7d5cc0866"],
      },
      {
        name: "serviceprovider",
        type: "string",
        value: ["Organization/1a2bcd34-5ef6-7ghi-jklm-89nopqrstuvw"],
      },
      {
        name: "reasonreference",
        type: "string",
        value: ["Procedure/59596455-93d0-4a9b-b996-f46adb942989"],
      },
      {
        name: "basedon",
        type: "string",
        value: ["ServiceRequest/eca516f6-0712-4b68-ad66-eff4e8860230"],
      },
      {
        name: "diagnosis",
        type: "string",
        value: ["Condition/1280b400-21f8-4f16-931b-41c809756547"],
      },
    ],
    displayParam: [
      "status",
      "subject",
      "serviceprovider",
      "reasonreference",
      "basedon",
      "diagnosis",
    ],
    status: function (queryData) {
      return "<b>Status</b>: " + queryData["status"];
    },
    subject: function (queryData) {
      return (
        "<b>Subject</b>: " +
        queryData["subject"]["type"] +
        "/" +
        queryData["subject"]["reference"]
      );
    },
    serviceprovider: function (queryData) {
      let serviceproviderValue;
      if (queryData["serviceProvider"] == null) serviceproviderValue = "null";
      else
        serviceproviderValue =
          queryData["serviceProvider"]["type"] +
          "/" +
          queryData["serviceProvider"]["reference"];
      return "<b>Service-Provider</b>: " + serviceproviderValue;
    },
    reasonreference: function (queryData) {
      let referenceValue;
      if (queryData["reasonReference"] == null) referenceValue = "null";
      else
        referenceValue =
          queryData["reasonReference"][0]["type"] +
          "/" +
          queryData["reasonReference"][0]["reference"];
      return "<b>Reason-Reference</b>: " + referenceValue;
    },
    basedon: function (queryData) {
      let basedonValue;
      if (queryData["basedOn"] == null) basedonValue = "null";
      else
        basedonValue =
          queryData["basedOn"][0]["type"] +
          "/" +
          queryData["basedOn"][0]["reference"];
      return "<b>Based On</b>: " + basedonValue;
    },
    diagnosis: function (queryData) {
      let diagnosisValue;
      if (queryData["diagnosis"] == null) diagnosisValue = "null";
      else
        diagnosisValue =
          queryData["diagnosis"][0]["condition"]["type"] +
          "/" +
          queryData["diagnosis"][0]["condition"]["reference"];
      return "<b>Diagnosis</b>: " + diagnosisValue;
    },
  },

  FamilyMemberHistory: {
    queryParam: [
      {
        name: "status",
        type: "string",
        value: ["partial", "completed", "entered-in-error", "health-unknown"],
      },
      {
        name: "patient",
        type: "string",
        value: ["Patient/cea0b74f-078c-4506-a638-35e7d5cc0866"],
      },
      {
        name: "date",
        type: "string",
        value: ["2019-07-04 00:00:00"],
      },
    ],
    displayParam: [
      "patient",
      "Name",
      "relationShip",
      "Condition",
      "reasonReference",
      "status",
    ],
    Name: function (queryData) {
      return "<b>FamilyMemberName</b>: " + queryData["name"];
    },
    patient: function (queryData) {
      return "<b>PatientId</b>: " + queryData["patient"]["reference"];
    },

    relationShip: function (queryData) {
      let text = "<b>relationShip</b>: ";
      if (queryData["relationship"] != null) {
        text += `${queryData["relationship"]["coding"][0]["display"]}`;
      } else {
        text += queryData["relationship"];
      }
      return text;
    },
    Condition: function (queryData) {
      let text = "<b>Condition</b>: ";
      if (queryData["condition"] != null) {
        text += `${queryData["condition"][0]["code"]["coding"][0]["code"]}`;
      } else {
        text += queryData["condition"];
      }
      return text;
    },
    reasonReference: function (queryData) {
      let text = "<b>reasonReference</b>: ";
      if (queryData["reasonReference"] != null) {
        text += `${queryData["reasonReference"][0]["type"]}`;
      } else {
        text += queryData["reasonReference"];
      }
      return text;
    },
    status: function (queryData) {
      return "<b>Status</b>: " + queryData["status"];
    },
  },

  Immunization: {
    queryParam: [
      {
        name: "status",
        type: "string",
        value: ["completed", "not-done"],
      },
      {
        name: "vaccine-code",
        type: "string",
        value: ["NCI THESAURUS|49281400880"],
      },
      {
        name: "reaction-date",
        type: "string",
        value: ["2011-05-19 00:00:00"],
      },
      {
        name: "lot-number",
        type: "string",
        value: ["M037096"],
      },
      {
        name: "patient",
        type: "string",
        value: ["Patient/cea0b74f-078c-4506-a638-35e7d5cc0866"],
      },
      {
        name: "reason-reference",
        type: "string",
        value: ["Observation/c2cc58a9-8a49-476f-b745-9c29a198fb4d"],
      },
      {
        name: "reaction-date",
        type: "string",
        value: ["2011-05-19 00:00:00"],
      },
      {
        name: "reaction",
        type: "string",
        value: ["Observation/25705a76-bb18-4050-823c-3193b8aa8c38"],
      },
      {
        name: "performer",
        type: "string",
        value: ["PractitionerRole/ac92dc52-543b-41c7-b37c-3b1b6995e513"],
      },
      {
        name: "patient",
        type: "string",
        value: ["Patient/cea0b74f-078c-4506-a638-35e7d5cc0866"],
      },
      {
        name: "manufacturer",
        type: "string",
        value: ["Organization/1a2bcd34-5ef6-7ghi-jklm-89nopqrstuvw"],
      },
      {
        name: "location",
        type: "string",
        value: ["Location/5823894b-e4f3-4c36-bcdc-81fe90484c67"],
      },
    ],
    displayParam: [
      "Id",
      "vaccineCode",
      "status",
      "reactionDate",
      "lotNumber",
      "expirationDate",
    ],
    Id: function (queryData) {
      return "<b>Id</b>: " + queryData["id"];
    },
    vaccineCode: function (queryData) {
      return (
        "<b>Type</b>: " +
        queryData["vaccineCode"]["coding"][0]["system"] +
        " | " +
        queryData["vaccineCode"]["coding"][0]["code"]
      );
    },
    status: function (queryData) {
      return "<b> Status</b>: " + queryData["status"];
    },
    reactionDate: function (queryData) {
      let text = "<b>reactionDate</b>: ";
      if (queryData["reaction"] != null) {
        text += `${queryData["reaction"][0]["date"]}`;
      } else {
        text += queryData["reaction"];
      }
      return text;
    },
    lotNumber: function (queryData) {
      let text = "<b>lotNumber</b>: ";

      text += queryData["lotNumber"];
      return text;
    },
    expirationDate: function (queryData) {
      return "<b>expirationDate</b>: " + queryData["expirationDate"];
    },
  },

  Location: {
    queryParam: [
      {
        name: "status",
        type: "string",
        value: ["suspended", "active", "inactive"],
      },
      {
        name: "partof",
        type: "string",
        value: ["Location/5823894b-e4f3-4c36-bcdc-81fe90484c67"],
      },
      {
        name: "address-use",
        type: "string",
        value: ["Vacation"],
      },
      {
        name: "address-state",
        type: "string",
        value: ["NEW MEXICO"],
      },
      {
        name: "address-postalcode",
        type: "string",
        value: ["80690"],
      },
      {
        name: "address-country",
        type: "string",
        value: ["US"],
      },
      {
        name: "address-city",
        type: "string",
        value: ["LEANNHAVEN"],
      },
      {
        name: "address",
        type: "string",
        value: ["SOUTH CAROLINA"],
      },
    ],
    displayParam: [
      "Id",
      "Status",
      "addressUse",
      "address",
      "city",
      "PostalCode",
    ],
    Id: function (queryData) {
      return "<b>Id</b>: " + queryData["id"];
    },
    Status: function (queryData) {
      return "<b>status</b>: " + queryData["status"];
    },
    addressUse: function (queryData) {
      let text = "<b>Use</b>: ";
      if (queryData["address"] != null) {
        text += `${queryData["address"]["use"]}`;
      } else {
        text += queryData["address"];
      }
      return text;
    },
    address: function (queryData) {
      let text = "<b>Address</b>: ";
      if (queryData["address"] != null) {
        text += `${queryData["address"]["state"]}`;
      } else {
        text += queryData["address"];
      }
      return text;
    },

    city: function (queryData) {
      let text = "<b>City</b>: ";
      if (queryData["address"] != null) {
        text += `${queryData["address"]["city"]}`;
      } else {
        text += queryData["address"];
      }
      return text;
    },
    PostalCode: function (queryData) {
      let text = "<b>postalCode</b>: ";
      if (queryData["address"] != null) {
        text += `${queryData["address"]["postalCode"]}`;
      } else {
        text += queryData["address"];
      }
      return text;
    },
  },
};
