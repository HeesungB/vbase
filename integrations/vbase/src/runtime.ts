import { DataItem, IRuntime, Validator } from '@kyvejs/protocol';

import { name, version } from '../package.json';

// Your runtime pool config
interface IConfig {
  url: string;
}

export default class VBaseRuntime implements IRuntime {
  public name = name;
  public version = version;
  public config!: IConfig;

  async validateSetConfig(rawConfig: string): Promise<void> {
    try {
      const config: IConfig = JSON.parse(rawConfig);

      if (process.env.url) {
        config.url = process.env.url;
      }

      if (process.env.url) {
        config.url = process.env.url;
      }

      this.config = config;
    } catch {
      this.config = {
        url: 'https://vbase-server.vercel.app',
      };
    }
  }

  async getDataItem(_: Validator, key: string): Promise<DataItem> {
    const response = await fetch(
      `${this.config.url}/api/read_review?key=${key}`
    );
    if (response.ok) {
      const data = await response.json();
      return { key, value: JSON.stringify(data) } as DataItem;
    }

    return { key } as DataItem;
  }

  async prevalidateDataItem(_: Validator, __: DataItem): Promise<boolean> {
    return true;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    return item;
  }

  async validateDataItem(
    _: Validator,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean> {
    return (
      JSON.stringify(proposedDataItem) === JSON.stringify(validationDataItem)
    );
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    return JSON.stringify(bundle);
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }
}
