import { Component, Prop, h, Watch } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop({ reflect: true, mutable: true }) checked?: boolean = false;

  @Watch('checked')
  onValueChange(): void {
    console.log('trigger from watch', this.checked);
  }

  private readonly onChange = (e: InputEvent): void => {
    const isElementChecked = (e.target as HTMLInputElement).checked;
    if (isElementChecked !== this.checked) {
      this.checked = isElementChecked;
    }
  };

  render() {
    return <input onChange={this.onChange} type="checkbox" name="test" id="" />;
  }
}
