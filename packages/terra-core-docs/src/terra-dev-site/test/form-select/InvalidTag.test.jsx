import React from 'react';
import classNames from 'classnames/bind';
import Select from 'terra-form-select/lib/Select';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const IncompleteTag = () => (
  <div className={cx('content-wrapper')}>
    <Select isInvalid placeholder="Select a color" variant="tag" id="tag">
      <Select.Option value="blue" display="Blue" />
      <Select.Option value="green" display="Green" />
      <Select.Option value="purple" display="Purple" />
      <Select.Option value="red" display="Red" />
      <Select.Option value="violet" display="Violet" />
    </Select>
  </div>
);

export default IncompleteTag;
