export const EXAMPLE_PROMPT = `DATA: \n"Rabin is 27 years old and studies computer science at university"\n\n-----------\nExpected JSON format: 
{
  name: { type: "string" },
  age: { type: "number" },
  isStudent: { type: "boolean" },
  courses: {
    type: "array",
    items: { type: "string" },
  },
}
\n\n-----------\nValid JSON output in expected format:`

export const EXAMPLE_ANSWER = `{
name: "Rabin Gurung",
age: 27,
isStudent: false,
courses: ["computer science"],
}`