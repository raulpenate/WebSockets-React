import Band from "./band";

interface BandListProps {
    data: Band[];
    vote: (id: string) => void;
    remove: (id: string) => void;
    rename: (id: string, name: string) => void;
  }

  export default BandListProps