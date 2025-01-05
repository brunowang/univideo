"use strict";
const common_vendor = require("../../common/vendor.js");
const tab = () => "../../components/tab.js";
const firstNav = () => "../../components/first-nav.js";
const _sfc_main = {
  components: {
    tab,
    firstNav
  },
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _component_first_nav = common_vendor.resolveComponent("first-nav");
  const _component_tab = common_vendor.resolveComponent("tab");
  (_component_first_nav + _component_tab)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
