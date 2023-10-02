const mock = [
  {
    id: "1",
    title: "test",
    description: "test",
    date: "test",
    image: "test",
    video: "test",
    rocket: {
      id: "1",
      name: "test",
      description: "test",
      image: "test",
    },
    launchpad: {
      id: "1",
      name: "test",
      description: "test",
      image: "test",
    },
  },
];

export async function GET() {
  return Response.json(mock);
}
