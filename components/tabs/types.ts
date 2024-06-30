export interface StateTabsProps {
  collection: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >[];
  selectedItem: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
  selectedKey: string | null;
}
