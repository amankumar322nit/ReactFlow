import { MarkerType } from "reactflow";
//import ChatIcon from '@mui/icons-material/Chat';

export const nodes = [
  {
    id: "1",
    type: "node",
    data: { heading: "Send Message", content: "This is text 1" },
    position: { x: 50, y: 200 }
  },
  {
    id: "2",
    type: "node",
    data: { heading: "Send Message", content: "This is text 2" },
    position: { x: 700, y: 800 }
  }
];

export const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  }
];
