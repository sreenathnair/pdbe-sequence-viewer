import {
    html,
    render
} from 'lit-html'

import {
    config, color_code
} from './config'

import '../styles/pdbe-sequence-viewer.css';

const loadComponent = function () {
    class PDBeSequenceViewer extends HTMLElement {

        constructor() {
            super()

            console.log('Component loaded')

        }

        connectedCallback() {

            this._pdbId = this.getAttribute('pdbId')
            this._entityId = this.getAttribute('entityId')
            console.log('Params -> ', this._pdbId, this._entityId)

            console.log('Inside connected callback')
            this.loadPDBEntity(this._pdbId).then(result => {
                this._pdbSequence = result[this._pdbId].filter(x => x.entity_id == this._entityId)[0].pdb_sequence
                this._pdbSequenceLength = this._pdbSequence.length
                console.log('Sequence -> ', this._pdbSequence, this._pdbSequenceLength)

                this.loadBestChainId(this._pdbId).then(result => {
                    this._bestChainId = result[this._pdbId][this._entityId][0].chain_id

                    this._paintBasicHTML()

                })

            })

        }

        async loadPDBEntity(pdbId) {

            console.log('Inside loadpdbentity', pdbId)

            // making API call to get basic details
            try {
                return await (await fetch(`https://www.ebi.ac.uk/pdbe/api/pdb/entry/entities/${pdbId}`)).json()
            } catch (e) {
                console.log('Error loading PDB Entity details', e)
            }

        }

        async loadBestChainId(pdbId) {

            console.log('Inside loadBestChainId', pdbId)

            //making API call to get best chain id
            try {
                return await (await fetch(`https://www.ebi.ac.uk/pdbe/api/pdb/entry/observed_residues_ratio/${pdbId}`)).json()
            } catch (e) {
                console.log('Error loading best chain id details', e)
            }
        }

        _paintBasicHTML() {
            console.log('Inside _paintBasicHTML')

            const basicHtml = () => html `
            <protvista-manager attributes="length displaystart displayend variantfilters">
                <protvista-navigation length="${this._pdbSequenceLength}"></protvista-navigation>
                <protvista-sequence id="seq1" length="${this._pdbSequenceLength}"></protvista-sequence>
                <div class="track-static">
                    Molecule
                </div>
                <div class="track-static-content">
                    <protvista-pdbe-track id="molecule" length="${this._pdbSequenceLength}" layout="overlapping">
                        <pdbe-feature-adapter feature="molecule" pdbid="${this._pdbId}" entityid="${this._entityId}" length="${this._pdbSequenceLength}">
                            <data-loader>
                                <source src="https://www.ebi.ac.uk/pdbe/api/pdb/entry/entities/${this._pdbId}" />
                            </data-loader>
                        </pdbe-feature-adapter>
                        <pdbe-feature-adapter feature="modified" pdbid="${this._pdbId}" entityid="${this._entityId}" length="${this._pdbSequenceLength}">
                            <data-loader>
                                <source src="https://www.ebi.ac.uk/pdbe/api/pdb/entry/mofified_AA_or_NA/${this._pdbId}" />
                            </data-loader>
                        </pdbe-feature-adapter>
                        <pdbe-feature-adapter feature="mutated" pdbid="${this._pdbId}" entityid="${this._entityId}" length="${this._pdbSequenceLength}">
                            <data-loader>
                                <source src="https://www.ebi.ac.uk/pdbe/api/pdb/entry/mutated_AA_or_NA/${this._pdbId}" />
                            </data-loader>
                        </pdbe-feature-adapter>
                    </protvista-pdbe-track>
                </div>
                <div class="track-static">
                    UniProt
                </div>
                <div class="track-static-content">
                    <protvista-pdbe-track id="uniprot" length="${this._pdbSequenceLength}" layout="overlapping">
                        <pdbe-feature-adapter feature="uniprot" pdbid="${this._pdbId}" entityid="${this._entityId}" length="${this._pdbSequenceLength}" chainid="${this._bestChainId}">
                            <data-loader>
                                <source src="https://www.ebi.ac.uk/pdbe/api/mappings/uniprot/${this._pdbId}" />
                            </data-loader>
                        </pdbe-feature-adapter>
                    </protvista-pdbe-track>
                </div>
                ${config['default_structure'].map(category =>
                    html`
                        <div class="category" category-toggle="${category.id}">
                            ${category.label}
                        </div>
                        <div class="group-track-content" toggle-group="${category.id}">
                            <protvista-pdbe-track id="${category.id}" length="${this._pdbSequenceLength}" layout="overlapping">
                                ${category.summary.map(content =>
                                    html`
                                    <pdbe-feature-adapter feature="${content}" pdbid="${this._pdbId}" entityid="${this._entityId}" chainid="${this._bestChainId}" length="${this._pdbSequenceLength}">
                                        <data-loader>
                                            <source src="${category.contents.filter(x => x.id == content).map(x => x.api)}/${this._pdbId}" />
                                        </data-loader>
                                    </pdbe-feature-adapter>
                                    `
                                )}
                            </protvista-pdbe-track>
                        </div>
                        ${category.contents.filter(track => track.skip != "true").map(track => html`
                            <div class="track" toggle="${category.id}">
                                ${track.label}
                            </div>
                            <div class="track-content" toggle="${category.id}">
                                <protvista-pdbe-track id="${track.id}" length="${this._pdbSequenceLength}" layout="${track.layout}">
                                    <pdbe-feature-adapter feature="${track.id}" pdbid="${this._pdbId}" entityid="${this._entityId}" chainid="${this._bestChainId}" length="${this._pdbSequenceLength}">
                                        <data-loader>
                                            <source src="${track.api}/${this._pdbId}" />
                                        </data-loader>
                                    </pdbe-feature-adapter>
                                </protvista-pdbe-track>
                            </div>`)}
                    `
                )}

                <protvista-sequence id="seq2" length="${this._pdbSequenceLength}"></protvista-sequence>
                
            </protvista-manager>
            `
            
            try {
                render(basicHtml(), this)
            } catch (error) {
                //console.log('Error->', e)
            }

            this.querySelectorAll('.category').forEach(cat => {
                cat.addEventListener('click', e => {
                    this.handleCategoryClick(e);
                });
            });

            this.querySelectorAll('protvista-sequence').forEach(seqComp => {
                seqComp.data = this._pdbSequence
            })
        }

        handleCategoryClick(e) {
            const toggle = e.target.getAttribute('category-toggle');
            if (!e.target.classList.contains('open')) {
                e.target.classList.add('open');
            } else {
                e.target.classList.remove('open');
            }
            this.toggleOpacity(this.querySelector(`[toggle-group=${toggle}]`));
            this.querySelectorAll(`[toggle=${toggle}]`).forEach(track => this.toggleVisibility(track));
        }

        toggleOpacity(elt) {
            if (elt.style.opacity === '' || parseInt(elt.style.opacity) === 1) {
                elt.style.opacity = 0;
            } else {
                elt.style.opacity = 1;
            }
        }

        toggleVisibility(elt) {
            if (elt.style.display === '' || elt.style.display === 'none') {
                elt.style.display = 'block';
            } else {
                elt.style.display = 'none';
            }
        }

    }
    customElements.define('pdbe-sequence-viewer', PDBeSequenceViewer);
};

// Conditional loading of polyfill
if (window.customElements) {
    loadComponent();
} else {
    document.addEventListener('WebComponentsReady', function () {
        loadComponent();
    });
}