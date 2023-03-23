import { defineComponent, ref, openBlock, createElementBlock, createElementVNode, toDisplayString, createCommentVNode, computed, withModifiers, normalizeClass, Fragment, renderList, unref, createVNode, Transition, withCtx, renderSlot, createTextVNode } from "vue";
const _hoisted_1$2 = { class: "flex-nowrap flex-v-center flex pd-medium bg-white" };
const _hoisted_2$2 = {
  key: 0,
  class: "t-left mn-r-small w-33"
};
const _hoisted_3$2 = { class: "w-100" };
const _hoisted_4$2 = ["value", "placeholder"];
const _sfc_main$2 = defineComponent({
  __name: "Field",
  props: {
    label: { default: "Label" },
    placeholder: { default: "Enter something here" },
    field: { default: null },
    validation: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const text = ref(props.field);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        __props.label ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          createElementVNode("label", null, toDisplayString(__props.label), 1)
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_3$2, [
          createElementVNode("input", {
            onInput: _cache[0] || (_cache[0] = (event) => {
              var _a;
              return text.value = emit("update:modelValue", (_a = event.target) == null ? void 0 : _a.value);
            }),
            type: "text",
            class: "w-100",
            value: __props.field,
            placeholder: __props.placeholder
          }, null, 40, _hoisted_4$2)
        ])
      ]);
    };
  }
});
var Select_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$1 = { class: "input-wrapper" };
const _hoisted_2$1 = { class: "t-transp p-small" };
const _hoisted_3$1 = {
  key: 0,
  class: "flex-nojustify flex-v-center flex-nowrap flex w-100"
};
const _hoisted_4$1 = {
  key: 1,
  class: "w-100"
};
const _hoisted_5$1 = ["onClick"];
const _sfc_main$1 = {
  __name: "Select",
  props: ["obj", "label", "prop", "value", "options", "content", "textarea", "placeholder", "size"],
  setup(__props) {
    const props = __props;
    const selectedOption = ref(null);
    const showMenu = ref(false);
    ref("Please select an item");
    let optionsListed = computed(() => {
      if (props.prop[props.content]) {
        var idx = props.options.indexOf(props.prop[props.content]);
        var newArray = props.options.map((element) => {
          return element;
        });
        if (idx != -1)
          newArray.splice(idx, 1);
        return newArray;
      } else {
        return props.options;
      }
    });
    if (props.prop[props.content]) {
      selectedOption.value = props.prop[props.content];
    }
    function toggleMenu() {
      showMenu.value = !showMenu.value;
    }
    function updateInputText(prop, content, event) {
      var element = event;
      selectedOption.value = element;
      showMenu.value = !showMenu.value;
      prop[content] = element;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("span", _hoisted_2$1, toDisplayString(__props.label), 1),
        createElementVNode("li", {
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => toggleMenu(), ["stop"])),
          class: normalizeClass([{ "input-small": __props.size === "small" }, "pd-small flex-center flex-nowrap flex bg-grey input-select input"])
        }, [
          selectedOption.value ? (openBlock(), createElementBlock("span", _hoisted_3$1, [
            createElementVNode("span", null, toDisplayString(selectedOption.value.name ? selectedOption.value.name : selectedOption.value), 1)
          ])) : (openBlock(), createElementBlock("span", _hoisted_4$1, toDisplayString(__props.placeholder ? __props.placeholder : "Please select"), 1))
        ], 2),
        showMenu.value ? (openBlock(), createElementBlock("ul", {
          key: 0,
          class: normalizeClass([{ "dropdown-small": __props.size === "small" }, "bg-grey dropdown-menu"])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(optionsListed), (option) => {
            return openBlock(), createElementBlock("li", {
              class: normalizeClass([{ "input-small": __props.size === "small" }, "pd-small bg-grey input-select input"])
            }, [
              option ? (openBlock(), createElementBlock("span", {
                key: 0,
                onClick: ($event) => updateInputText(__props.prop, __props.content, option),
                class: "flex-nojustify flex-v-center flex-nowrap flex w-100"
              }, [
                createElementVNode("span", null, toDisplayString(option.name ? option.name : option), 1)
              ], 8, _hoisted_5$1)) : createCommentVNode("", true)
            ], 2);
          }), 256))
        ], 2)) : createCommentVNode("", true)
      ]);
    };
  }
};
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-112f9fba"]]);
const _hoisted_1 = ["disabled"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = {
  key: 0,
  class: "loading"
};
const _hoisted_4 = /* @__PURE__ */ createElementVNode("span", null, [
  /* @__PURE__ */ createElementVNode("svg", {
    class: "i-default",
    width: "135",
    height: "140",
    viewBox: "0 0 135 140",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#fff"
  }, [
    /* @__PURE__ */ createElementVNode("rect", {
      y: "10",
      width: "15",
      height: "120",
      rx: "6"
    }, [
      /* @__PURE__ */ createElementVNode("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createElementVNode("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ]),
    /* @__PURE__ */ createElementVNode("rect", {
      x: "30",
      y: "10",
      width: "15",
      height: "120",
      rx: "6"
    }, [
      /* @__PURE__ */ createElementVNode("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createElementVNode("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ]),
    /* @__PURE__ */ createElementVNode("rect", {
      x: "60",
      width: "15",
      height: "140",
      rx: "6"
    }, [
      /* @__PURE__ */ createElementVNode("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createElementVNode("animate", {
        attributeName: "y",
        begin: "0s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ]),
    /* @__PURE__ */ createElementVNode("rect", {
      x: "90",
      y: "10",
      width: "15",
      height: "120",
      rx: "6"
    }, [
      /* @__PURE__ */ createElementVNode("animate", {
        attributeName: "height",
        begin: "0.25s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createElementVNode("animate", {
        attributeName: "y",
        begin: "0.25s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ]),
    /* @__PURE__ */ createElementVNode("rect", {
      x: "120",
      y: "10",
      width: "15",
      height: "120",
      rx: "6"
    }, [
      /* @__PURE__ */ createElementVNode("animate", {
        attributeName: "height",
        begin: "0.5s",
        dur: "1s",
        values: "120;110;100;90;80;70;60;50;40;140;120",
        calcMode: "linear",
        repeatCount: "indefinite"
      }),
      /* @__PURE__ */ createTextVNode(),
      /* @__PURE__ */ createElementVNode("animate", {
        attributeName: "y",
        begin: "0.5s",
        dur: "1s",
        values: "10;15;20;25;30;35;40;45;50;0;10",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ])
  ])
], -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = {
  key: 0,
  class: "h4 loading"
};
const _hoisted_7 = /* @__PURE__ */ createElementVNode("span", { class: "t-white" }, "\u2714", -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = {
  key: 0,
  class: "error"
};
const _sfc_main = defineComponent({
  __name: "Button",
  props: {
    submit: { type: Function, default: async () => {
      console.log("Button click.");
    } },
    callback: { type: Function, default: async () => {
      console.log("Button callback.");
    } },
    validation: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const button = ref(null);
    const error = ref(null);
    const loading = ref(false);
    const finished = ref(false);
    async function Submit() {
      button.value.style["pointer-events"] = "none";
      error.value = null;
      loading.value = true;
      try {
        await props.submit();
        button.value.classList.add("bg-light-blue");
        button.value.classList.remove("bg-blue");
        loading.value = false;
        finished.value = true;
        setTimeout(() => props.callback(), 750);
      } catch (err) {
        button.value.classList.add("bg-light-red");
        button.value.classList.remove("bg-blue");
        error.value = "\u274C";
        setTimeout(() => {
          button.value.classList.add("bg-blue");
          button.value.classList.remove("bg-light-red");
          button.value.style.pointerEvents = "auto";
          loading.value = false;
          finished.value = false;
          error.value = null;
        }, 1e3);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        onClick: Submit,
        disabled: __props.validation,
        ref_key: "button",
        ref: button,
        class: "w-100 t-white bg-blue button"
      }, [
        createVNode(Transition, {
          mode: "out-in",
          name: "fadeIn"
        }, {
          default: withCtx(() => [
            !loading.value && !error.value && !finished.value ? (openBlock(), createElementBlock("span", _hoisted_2, [
              renderSlot(_ctx.$slots, "default")
            ])) : createCommentVNode("", true)
          ]),
          _: 3
        }),
        createVNode(Transition, {
          mode: "out-in",
          name: "fadeIn"
        }, {
          default: withCtx(() => [
            loading.value && !error.value ? (openBlock(), createElementBlock("div", _hoisted_3, _hoisted_5)) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, {
          mode: "out-in",
          name: "fadeIn"
        }, {
          default: withCtx(() => [
            finished.value ? (openBlock(), createElementBlock("div", _hoisted_6, _hoisted_8)) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, {
          mode: "out-in",
          name: "fadeIn"
        }, {
          default: withCtx(() => [
            error.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
              createElementVNode("span", null, toDisplayString(error.value), 1)
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 8, _hoisted_1);
    };
  }
});
var main = {
  install: (app) => {
    app.component("Field", _sfc_main$2);
    app.component("Button", _sfc_main);
    app.component("Select", Select);
  }
};
export { _sfc_main as Button, _sfc_main$2 as Field, Select, main as default };
