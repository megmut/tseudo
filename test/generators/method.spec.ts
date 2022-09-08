import { expect } from 'chai';
import { JSDocTagStructure } from 'ts-morph';
import { generateDocs } from './../../src/compiler/generators/method';

describe('Method Docs', function () {
	it('Should create a doc object correctly', function () {
		const docs = generateDocs('test-doc');
		const tags: JSDocTagStructure[] = docs.tags as JSDocTagStructure[];
		expect(docs).to.be.instanceOf(Object);
		expect(tags).to.be.instanceOf(Array);
		expect(tags.length).to.equal(3);
		expect(tags[0].tagName).to.equal('description');
		expect(tags[0].text).to.equal('Create a new object instance from the test-doc interface.');
	});
});
