import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { LinkBio } from "./";
import { UserDataBio } from "@/types";

interface Props {
  dataBio: UserDataBio;
  setDataBio: React.Dispatch<React.SetStateAction<UserDataBio>>;
  handleDeleteLink: (idLink: string) => void;
}

export default function LinksBio({
  dataBio,
  setDataBio,
  handleDeleteLink,
}: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    console.log(active);
    console.log(over);

    if (active?.id !== over?.id) {
      setDataBio((dataBio) => {
        const oldIndex = dataBio.links
          .map((link) => link._id)
          .indexOf(`${active.id}`);

        const newIndex = dataBio.links
          .map((link) => link._id)
          .indexOf(`${over?.id}`);

        return {
          ...dataBio,
          links: arrayMove(dataBio.links, oldIndex, newIndex),
        };
      });

      // Arreglar reorder links

      // const data = await clientAxios.put("/bio/reorder-link", {
      //   idBio: dataBio._id,

      //   activeDrag: {
      //     id: active.id,
      //     position: over?.data?.current?.sortable.index,
      //   },

      //   overDrag: {
      //     id: over?.id,
      //     position: active?.data?.current?.sortable.index,
      //   },
      // });

      // console.log(data);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={dataBio?.links?.map((link) => link._id)}
        strategy={verticalListSortingStrategy}
      >
        {dataBio?.links?.map((link) => (
          <LinkBio
            key={link._id}
            link={link}
            dataBio={dataBio}
            setDataBio={setDataBio}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
}
