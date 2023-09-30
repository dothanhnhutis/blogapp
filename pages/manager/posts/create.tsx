import ManagerLayout from "@/components/Layouts/ManagerLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { Combobox, Listbox, Transition } from "@headlessui/react";
import React, { Fragment, ReactElement, useState } from "react";
import {
  AiFillCaretDown,
  AiOutlineCheck,
  AiOutlineCloudUpload,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { HiChevronUpDown } from "react-icons/hi2";
import {
  MdAddPhotoAlternate,
  MdCancel,
  MdFormatStrikethrough,
  MdFormatUnderlined,
  MdOutlineAddLink,
  MdOutlineFormatBold,
  MdOutlineFormatItalic,
} from "react-icons/md";

type BlockStyke = {
  id: number;
  name: string;
  style: string;
};
const blockStyles: BlockStyke[] = [
  { id: 1, name: "Paragraph", style: "unstyled" },
  { id: 2, name: "Heading One", style: "header-one" },
  { id: 3, name: "Heading Two", style: "header-two" },
  { id: 4, name: "Heading Three", style: "header-three" },
  { id: 5, name: "Heading Four", style: "header-four" },
  { id: 6, name: "Heading Five", style: "header-five" },
  { id: 7, name: "Heading Six", style: "header-six" },
];

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

const CreateNewPost: NextPageWithLayout = () => {
  const [selectedStyle, setSelectedStyle] = useState<BlockStyke>(
    blockStyles[0]
  );

  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div>
      <div className="relative bg-[#ecf2ff] rounded-xl overflow-hidden px-[25px] pt-[30px] pb-5 mb-6">
        <h4 className="font-semibold text-2xl">Blog app</h4>
        <h6 className="font-normal text-lg">Create new post now</h6>
        <div className="absolute right-[20px] top-0 w-[165px] h-[165px] ">
          <img src="/images/mediachat.png" alt="mediachat" />
        </div>
      </div>

      <div className="mt-6 p-6 rounded-lg overflow-hidden border-gray-200 border-[1px]">
        <form>
          <h3 className="font-bold text-xl text-gray-600 mb-4">
            Create New Post
          </h3>
          <div className="flex items-center justify-center rounded-lg w-full border-dashed border-[2px] border-gray-300 cursor-pointer mb-4">
            <label
              htmlFor="thumbnail"
              className="flex flex-col items-center text-gray-400 py-10 cursor-pointer"
            >
              <AiOutlineCloudUpload size={48} />
              <p className="text-black font-medium text-sm">
                Select file to Upload Thumnail
              </p>
            </label>
            <input type="file" id="thumbnail" className="hidden" />
          </div>

          <Combobox value={selected} onChange={setSelected}>
            <label htmlFor="author" className="block text-lg font-medium">
              Author
            </label>
            <div className="relative mt-1 mb-4">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left border focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(person) => person.name}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <HiChevronUpDown
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute z-[8] mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredPeople.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-teal-600 text-white" : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              >
                                <AiOutlineCheck
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>

          <div>
            <label className="block text-lg font-medium" htmlFor="title">
              Title
            </label>
            <input
              className="border-[1px] border-gray-300 rounded-lg p-2 w-full mb-4 mt-2"
              type="text"
              id="title"
              placeholder="Input title"
            />
          </div>

          <p className="block text-lg font-medium">Content</p>
          <div className="rounded-xl shadow-lg overflow-hidden p-4 mt-2 mb-4">
            <div className="flex items-center space-x-2 flex-wrap">
              <Listbox value={selectedStyle} onChange={setSelectedStyle}>
                <div className="relative">
                  <Listbox.Button className="flex justify-between items-center w-[160px] rounded border px-4 py-2 text-gray-500">
                    <p>{selectedStyle.name}</p>
                    <AiFillCaretDown size={16} />
                  </Listbox.Button>
                  <Listbox.Options className="absolute top-fill bg-white rounded py-2 overflow-hidden shadow space-y-2 ">
                    {blockStyles.map((b) => (
                      <Listbox.Option
                        key={b.id}
                        className={`px-3 py-2 ${
                          selectedStyle.style === b.style
                            ? "bg-sky-200"
                            : "hover:bg-gray-200"
                        } `}
                        value={b}
                        //   onClick={() => handleChangeStyle(b.style)}
                      >
                        {b.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
              <button
                //   onClick={() => handleInlineStyle("BOLD")}
                className={`p-2 rounded-full ${
                  false
                    ? "hover:bg-sky-100 text-sky-500"
                    : "hover:bg-gray-100 text-gray-500"
                }`}
              >
                <MdOutlineFormatBold size={24} />
              </button>
              <button
                //   onClick={() => handleInlineStyle("ITALIC")}
                className={`p-2 rounded-full ${
                  false
                    ? "hover:bg-sky-100 text-sky-500"
                    : "hover:bg-gray-100 text-gray-500"
                }`}
              >
                <MdOutlineFormatItalic size={24} />
              </button>
              <button
                //   onClick={() => handleInlineStyle("UNDERLINE")}
                className={`p-2 rounded-full ${
                  false
                    ? "hover:bg-sky-100 text-sky-500"
                    : "hover:bg-gray-100 text-gray-500"
                }`}
              >
                <MdFormatUnderlined size={24} />
              </button>
              <button
                //   onClick={() => handleInlineStyle("STRIKETHROUGH")}
                className={`p-2 rounded-full ${
                  // editorState.getCurrentInlineStyle().has("STRIKETHROUGH")
                  false
                    ? "hover:bg-sky-100 text-sky-500"
                    : "hover:bg-gray-100 text-gray-500"
                }`}
              >
                <MdFormatStrikethrough size={24} />
              </button>
              <button
                //   onClick={() => handleChangeStyle("ordered-list-item")}
                className={`p-2 rounded-full ${
                  // handleBlockHasStyle("ordered-list-item")
                  false
                    ? "hover:bg-sky-100 text-sky-500"
                    : "hover:bg-gray-100 text-gray-500"
                }`}
              >
                <AiOutlineOrderedList size={24} />
              </button>
              <button
                //   onClick={() => handleChangeStyle("unordered-list-item")}
                className={`p-2 rounded-full ${
                  false
                    ? "hover:bg-sky-100 text-sky-500"
                    : "hover:bg-gray-100 text-gray-500"
                }`}
              >
                <AiOutlineUnorderedList size={24} />
              </button>
              <button
                //   onClick={addLink}
                className={`p-2 rounded-full ${
                  false
                    ? "hover:bg-sky-100 text-sky-500"
                    : "hover:bg-gray-100 text-gray-500"
                }`}
              >
                <MdOutlineAddLink size={24} />
              </button>
              <label
                htmlFor="file"
                className={`p-2 rounded-full cursor-pointer ${
                  false
                    ? "hover:bg-sky-100 text-sky-500"
                    : "hover:bg-gray-100 text-gray-500"
                }`}
              >
                <MdAddPhotoAlternate size={24} />
                <input id="file" type="file" className="hidden" />
              </label>
              <button
                //   onClick={() => removeLink()}
                className={`p-2 rounded-full ${
                  false
                    ? "hover:bg-sky-100 text-sky-500"
                    : "hover:bg-gray-100 text-gray-500"
                }`}
              >
                <MdCancel size={24} />
              </button>
            </div>
            <div className="border mt-4 h-[300px] overflow-scroll rounded-xl p-2">
              <p>content</p>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-3 py-2 bg-red-500 rounded hover:bg-red-600 text-white disabled:bg-red-600/60"
            >
              Cancel
            </button>
            <button
              disabled
              type="submit"
              className="px-3 py-2 bg-blue-500 rounded text-white hover:bg-blue-600 disabled:bg-blue-600/60"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
CreateNewPost.getLayout = function getLayout(page: ReactElement) {
  return <ManagerLayout>{page}</ManagerLayout>;
};
export default CreateNewPost;
