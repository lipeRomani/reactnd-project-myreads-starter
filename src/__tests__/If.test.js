import React from 'react';
import {shallow, mount} from 'enzyme';
import If from '../If';

it ("Renders without crashing", () => {
    const wrapper = shallow(<If />);
    expect(wrapper).toMatchSnapshot();
});

it ("Teste if conditional works in true", () => {
    const wrapper = mount(
        <If test={true} >
            <span>ok</span>
        </If>
    );

    expect(wrapper.find('span')).toHaveLength(1);
});

it ("Teste if conditional works in false", () => {
    const wrapper = mount(
        <If test={false} >
            <span>ok</span>
        </If>
    );

    expect(wrapper.find('span')).toHaveLength(0);
});