import * as React from 'react';
import styles from './CicdspFxQwp.module.scss';
import { ICicdspFxQwpProps } from './ICicdspFxQwpProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class CicdspFxQwp extends React.Component<ICicdspFxQwpProps, {}> {
  public render(): React.ReactElement<ICicdspFxQwpProps> {
    return (
      <div className={ styles.cicdspFxQwp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SPFx Training!</span>
              <p className={ styles.subTitle }>Deploy this webpart using CI CD Azure Devops.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
