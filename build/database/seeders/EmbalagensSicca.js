"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const EmbalagensSicca_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/EmbalagensSicca"));
class EmbalagensSiccaSeeder extends Seeder_1.default {
    async run() {
        await EmbalagensSicca_1.default.createMany([
            {
                codsicca: 1,
                capacidadeembalagem: 1,
                unidadeembalagem: "Kg"
            },
            {
                codsicca: 2,
                capacidadeembalagem: 100,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 3,
                capacidadeembalagem: 1,
                unidadeembalagem: "L"
            },
            {
                codsicca: 4,
                capacidadeembalagem: 100,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 5,
                capacidadeembalagem: 2,
                unidadeembalagem: "Kg"
            },
            {
                codsicca: 6,
                capacidadeembalagem: 500,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 7,
                capacidadeembalagem: 3.6,
                unidadeembalagem: "L"
            },
            {
                codsicca: 8,
                capacidadeembalagem: 10,
                unidadeembalagem: "L"
            },
            {
                codsicca: 9,
                capacidadeembalagem: 20,
                unidadeembalagem: "L"
            },
            {
                codsicca: 10,
                capacidadeembalagem: 6,
                unidadeembalagem: "L"
            },
            {
                codsicca: 11,
                capacidadeembalagem: 50,
                unidadeembalagem: "L"
            },
            {
                codsicca: 12,
                capacidadeembalagem: 250,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 13,
                capacidadeembalagem: 200,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 14,
                capacidadeembalagem: 5,
                unidadeembalagem: "L"
            },
            {
                codsicca: 15,
                capacidadeembalagem: 250,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 16,
                capacidadeembalagem: 30,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 17,
                capacidadeembalagem: 90,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 18,
                capacidadeembalagem: 1.5,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 19,
                capacidadeembalagem: 9,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 20,
                capacidadeembalagem: 4,
                unidadeembalagem: "L"
            },
            {
                codsicca: 21,
                capacidadeembalagem: 5,
                unidadeembalagem: "Kg"
            },
            {
                codsicca: 22,
                capacidadeembalagem: 200,
                unidadeembalagem: "L"
            },
            {
                codsicca: 23,
                capacidadeembalagem: 25,
                unidadeembalagem: "Kg"
            },
            {
                codsicca: 24,
                capacidadeembalagem: 225,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 25,
                capacidadeembalagem: 120,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 26,
                capacidadeembalagem: 300,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 27,
                capacidadeembalagem: 10,
                unidadeembalagem: "Kg"
            },
            {
                codsicca: 29,
                capacidadeembalagem: 2.5,
                unidadeembalagem: "Kg"
            },
            {
                codsicca: 30,
                capacidadeembalagem: 10,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 31,
                capacidadeembalagem: 3,
                unidadeembalagem: "Kg"
            },
            {
                codsicca: 32,
                capacidadeembalagem: 25,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 34,
                capacidadeembalagem: 60,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 35,
                capacidadeembalagem: 500,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 36,
                capacidadeembalagem: 150,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 37,
                capacidadeembalagem: 15,
                unidadeembalagem: "Kg"
            },
            {
                codsicca: 38,
                capacidadeembalagem: 20,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 39,
                capacidadeembalagem: 15,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 40,
                capacidadeembalagem: 40,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 41,
                capacidadeembalagem: 450,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 42,
                capacidadeembalagem: 3.2,
                unidadeembalagem: "Kg"
            },
            {
                codsicca: 43,
                capacidadeembalagem: 240,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 44,
                capacidadeembalagem: 210,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 45,
                capacidadeembalagem: 6,
                unidadeembalagem: "Kg"
            },
            {
                codsicca: 46,
                capacidadeembalagem: 20,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 47,
                capacidadeembalagem: 200,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 48,
                capacidadeembalagem: 225,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 49,
                capacidadeembalagem: 50,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 50,
                capacidadeembalagem: 30,
                unidadeembalagem: "L"
            },
            {
                codsicca: 51,
                capacidadeembalagem: 14,
                unidadeembalagem: "Kg"
            },
            {
                codsicca: 54,
                capacidadeembalagem: 900,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 55,
                capacidadeembalagem: 2,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 56,
                capacidadeembalagem: 3,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 57,
                capacidadeembalagem: 5,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 58,
                capacidadeembalagem: 5,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 59,
                capacidadeembalagem: 8,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 60,
                capacidadeembalagem: 12,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 61,
                capacidadeembalagem: 14,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 62,
                capacidadeembalagem: 24,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 63,
                capacidadeembalagem: 25,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 64,
                capacidadeembalagem: 28,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 65,
                capacidadeembalagem: 34,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 66,
                capacidadeembalagem: 36,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 67,
                capacidadeembalagem: 42,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 68,
                capacidadeembalagem: 48,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 69,
                capacidadeembalagem: 65,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 70,
                capacidadeembalagem: 67,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 71,
                capacidadeembalagem: 70,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 72,
                capacidadeembalagem: 72,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 73,
                capacidadeembalagem: 75,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 74,
                capacidadeembalagem: 80,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 75,
                capacidadeembalagem: 108,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 76,
                capacidadeembalagem: 114,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 77,
                capacidadeembalagem: 125,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 78,
                capacidadeembalagem: 125,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 79,
                capacidadeembalagem: 140,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 80,
                capacidadeembalagem: 150,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 81,
                capacidadeembalagem: 170,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 82,
                capacidadeembalagem: 240,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 83,
                capacidadeembalagem: 300,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 84,
                capacidadeembalagem: 320,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 85,
                capacidadeembalagem: 350,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 86,
                capacidadeembalagem: 360,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 87,
                capacidadeembalagem: 390,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 88,
                capacidadeembalagem: 399,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 89,
                capacidadeembalagem: 400,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 90,
                capacidadeembalagem: 400,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 91,
                capacidadeembalagem: 420,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 92,
                capacidadeembalagem: 454,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 93,
                capacidadeembalagem: 480,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 94,
                capacidadeembalagem: 540,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 95,
                capacidadeembalagem: 600,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 96,
                capacidadeembalagem: 680,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 97,
                capacidadeembalagem: 700,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 98,
                capacidadeembalagem: 750,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 99,
                capacidadeembalagem: 800,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 100,
                capacidadeembalagem: 800,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 101,
                capacidadeembalagem: 875,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 102,
                capacidadeembalagem: 900,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 103,
                capacidadeembalagem: 996,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 104,
                capacidadeembalagem: 999,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 105,
                capacidadeembalagem: 1.2,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 106,
                capacidadeembalagem: 1.2,
                unidadeembalagem: "L"
            },
            {
                codsicca: 107,
                capacidadeembalagem: 1.25,
                unidadeembalagem: "L"
            },
            {
                codsicca: 108,
                capacidadeembalagem: 1.35,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 109,
                capacidadeembalagem: 1.4,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 110,
                capacidadeembalagem: 1.5,
                unidadeembalagem: "L"
            },
            {
                codsicca: 111,
                capacidadeembalagem: 1.6,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 112,
                capacidadeembalagem: 1.6,
                unidadeembalagem: "L"
            },
            {
                codsicca: 113,
                capacidadeembalagem: 1.7,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 114,
                capacidadeembalagem: 1.75,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 115,
                capacidadeembalagem: 1.9,
                unidadeembalagem: "L"
            },
            {
                codsicca: 116,
                capacidadeembalagem: 2,
                unidadeembalagem: "L"
            },
            {
                codsicca: 117,
                capacidadeembalagem: 2.1,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 118,
                capacidadeembalagem: 2.5,
                unidadeembalagem: "L"
            },
            {
                codsicca: 119,
                capacidadeembalagem: 3,
                unidadeembalagem: "L"
            },
            {
                codsicca: 120,
                capacidadeembalagem: 3.2,
                unidadeembalagem: "L"
            },
            {
                codsicca: 121,
                capacidadeembalagem: 3.5,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 122,
                capacidadeembalagem: 3.5,
                unidadeembalagem: "L"
            },
            {
                codsicca: 123,
                capacidadeembalagem: 3.75,
                unidadeembalagem: "L"
            },
            {
                codsicca: 124,
                capacidadeembalagem: 3.8,
                unidadeembalagem: "L"
            },
            {
                codsicca: 125,
                capacidadeembalagem: 4,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 126,
                capacidadeembalagem: 4.2,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 127,
                capacidadeembalagem: 4.375,
                unidadeembalagem: "L"
            },
            {
                codsicca: 128,
                capacidadeembalagem: 4.5,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 129,
                capacidadeembalagem: 4.5,
                unidadeembalagem: "L"
            },
            {
                codsicca: 130,
                capacidadeembalagem: 6.4,
                unidadeembalagem: "L"
            },
            {
                codsicca: 131,
                capacidadeembalagem: 7.2,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 132,
                capacidadeembalagem: 8,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 133,
                capacidadeembalagem: 8,
                unidadeembalagem: "L"
            },
            {
                codsicca: 134,
                capacidadeembalagem: 8.4,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 135,
                capacidadeembalagem: 9,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 136,
                capacidadeembalagem: 9,
                unidadeembalagem: "L"
            },
            {
                codsicca: 137,
                capacidadeembalagem: 12,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 138,
                capacidadeembalagem: 12,
                unidadeembalagem: "L"
            },
            {
                codsicca: 139,
                capacidadeembalagem: 12.5,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 140,
                capacidadeembalagem: 13,
                unidadeembalagem: "L"
            },
            {
                codsicca: 141,
                capacidadeembalagem: 14.04,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 142,
                capacidadeembalagem: 15,
                unidadeembalagem: "L"
            },
            {
                codsicca: 143,
                capacidadeembalagem: 16.9,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 144,
                capacidadeembalagem: 18,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 145,
                capacidadeembalagem: 18,
                unidadeembalagem: "L"
            },
            {
                codsicca: 146,
                capacidadeembalagem: 22,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 147,
                capacidadeembalagem: 24,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 148,
                capacidadeembalagem: 24,
                unidadeembalagem: "L"
            },
            {
                codsicca: 149,
                capacidadeembalagem: 25,
                unidadeembalagem: "L"
            },
            {
                codsicca: 150,
                capacidadeembalagem: 30,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 151,
                capacidadeembalagem: 40,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 152,
                capacidadeembalagem: 40,
                unidadeembalagem: "L"
            },
            {
                codsicca: 153,
                capacidadeembalagem: 60,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 154,
                capacidadeembalagem: 70,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 155,
                capacidadeembalagem: 75,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 156,
                capacidadeembalagem: 80,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 157,
                capacidadeembalagem: 80,
                unidadeembalagem: "L"
            },
            {
                codsicca: 158,
                capacidadeembalagem: 90,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 159,
                capacidadeembalagem: 98.7,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 160,
                capacidadeembalagem: 100,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 161,
                capacidadeembalagem: 100,
                unidadeembalagem: "L"
            },
            {
                codsicca: 162,
                capacidadeembalagem: 120,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 163,
                capacidadeembalagem: 150,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 164,
                capacidadeembalagem: 160,
                unidadeembalagem: "L"
            },
            {
                codsicca: 165,
                capacidadeembalagem: 180,
                unidadeembalagem: "L"
            },
            {
                codsicca: 166,
                capacidadeembalagem: 200,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 167,
                capacidadeembalagem: 205,
                unidadeembalagem: "L"
            },
            {
                codsicca: 168,
                capacidadeembalagem: 225,
                unidadeembalagem: "L"
            },
            {
                codsicca: 169,
                capacidadeembalagem: 250,
                unidadeembalagem: "L"
            },
            {
                codsicca: 170,
                capacidadeembalagem: 300,
                unidadeembalagem: "L"
            },
            {
                codsicca: 171,
                capacidadeembalagem: 400,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 172,
                capacidadeembalagem: 400,
                unidadeembalagem: "L"
            },
            {
                codsicca: 173,
                capacidadeembalagem: 420,
                unidadeembalagem: "L"
            },
            {
                codsicca: 174,
                capacidadeembalagem: 500,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 175,
                capacidadeembalagem: 500,
                unidadeembalagem: "L"
            },
            {
                codsicca: 176,
                capacidadeembalagem: 600,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 177,
                capacidadeembalagem: 640,
                unidadeembalagem: "L"
            },
            {
                codsicca: 178,
                capacidadeembalagem: 1,
                unidadeembalagem: "L"
            },
            {
                codsicca: 179,
                capacidadeembalagem: 1.5,
                unidadeembalagem: "L"
            },
            {
                codsicca: 180,
                capacidadeembalagem: 10,
                unidadeembalagem: "L"
            },
            {
                codsicca: 181,
                capacidadeembalagem: 681,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 182,
                capacidadeembalagem: 4.086,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 183,
                capacidadeembalagem: 30,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 184,
                capacidadeembalagem: 8.172,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 185,
                capacidadeembalagem: 50,
                unidadeembalagem: "kg"
            },
            {
                codsicca: 186,
                capacidadeembalagem: 180,
                unidadeembalagem: "gr"
            },
            {
                codsicca: 187,
                capacidadeembalagem: 180,
                unidadeembalagem: "ml"
            },
            {
                codsicca: 188,
                capacidadeembalagem: 2.25,
                unidadeembalagem: "kg"
            }
        ]);
    }
}
exports.default = EmbalagensSiccaSeeder;
//# sourceMappingURL=EmbalagensSicca.js.map