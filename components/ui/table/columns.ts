import { h } from "vue";
import { type ColumnDef } from "@tanstack/vue-table";
import SkillRating from "../../SkillRating.vue";

export interface Skill {
  name: string;
  maxValue: number;
  defaultValue: number;
  comments: string[];
  selectedComment: string;
  includeComment: boolean;
}

export const columns: ColumnDef<Skill>[] = [
  {
    accessorKey: "name",
    header: "Skill",
    cell: ({ row }) => h("span", {}, row.getValue("name")),
  },
  {
    accessorKey: "defaultValue",
    header: "Rating",
    cell: ({ row }) => {
      const maxValue = row.original.maxValue;
      const defaultValue = row.getValue("defaultValue") as number;

      return h(SkillRating, {
        skill: row.original.name,
        maxValue,
        defaultValue,
        onUpdate: (value: number) => {
          row.original.defaultValue = value;
        },
      });
    },
  },
  {
    accessorKey: "comments",
    header: "Comments",
    cell: ({ row }) => {
      return h(
        "select",
        {
          modelValue: row.original.selectedComment,
          onInput: (event: Event) => {
            row.original.selectedComment = (
              event.target as HTMLSelectElement
            ).value;
          },
          class: "form-select w-full border border-gray-300 rounded-md py-2",
        },
        [
          h("option", { disabled: true, value: "" }, "Select Feedback"),
          ...row.original.comments.map((comment) =>
            h("option", { value: comment }, comment)
          ),
        ]
      );
    },
  },
  {
    accessorKey: "includeComment",
    header: "Include",
    cell: ({ row }) => {
      return h("input", {
        type: "checkbox",
        checked: row.original.includeComment,
        onChange: (event: Event) => {
          row.original.includeComment = (
            event.target as HTMLInputElement
          ).checked;
        },
        class: "form-checkbox h-5 w-5 text-gray-600",
      });
    },
  },
];
