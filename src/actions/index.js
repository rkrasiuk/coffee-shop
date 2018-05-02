export const PASS_ORDER = 'pass_order';
export const TAB_SELECTED = 'active_tab';

export function passOrder(order) {
  return ({
    type: PASS_ORDER,
    payload: order
  });
}

export function selectTab(tab) {
  return {
    type: TAB_SELECTED,
    payload: tab
  };
}
