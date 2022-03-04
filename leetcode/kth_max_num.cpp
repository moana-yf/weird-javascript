//
// Created by 李向一 on 2021/6/28.
//

#include <climits>
#include <iostream>
#include <string>
using namespace std;

void swap(int *x, int *y);

class MinHeap
{
    int *htr;
    int capacity;
    int heap_size;

public:
    MinHeap(int a[], int size);
    void MinHeapify(int i);
    int parent(int i) { return (i - 1) / 2; }
    int left(int i) { return (2 * i + 1); }
    int right(int i) { return (2 * i + 2); }

    int extractMin();
    int getMin() { return htr[0]; }
};

MinHeap::MinHeap(int a[], int size)
{
    heap_size = size;
    htr = a;
    int i = (heap_size - 1) / 2;
    while (i >= 0)
    {
        MinHeapify(i);
        i--;
    }
}

int MinHeap::extractMin()
{
    if (heap_size == 0)
        return INT_MAX;

    int root = htr[0];

    if (heap_size > 1)
    {
        htr[0] = htr[heap_size - 1];
        MinHeapify(0);
    }
    heap_size--;

    return root;
}

void MinHeap::MinHeapify(int i)
{
    int l = left(i);
    int r = right(i);
    int smallest = i;
    if (l < heap_size && htr[l] < htr[i])
        smallest = l;
    if (r < heap_size && htr[r] < htr[smallest])
        smallest = r;
    if (smallest != i)
    {
        swap(&htr[i], &htr[smallest]);
        MinHeapify(smallest);
    }
}

void swap(int *x, int *y)
{
    int temp = *x;
    *x = *y;
    *y = temp;
}

int kthSmallest(int arr[], int n, int k)
{
    MinHeap mh(arr, n);

    for (int i = 0; i < k - 1; i++)
        mh.extractMin();

    return mh.getMin();
}

int main()
{
    string raw_input;

    int n;
    int k;

    cin >> n >> k;

    int arr[n];

    int inp;
    for (int i = 0; i < n; i++)
    {
        cin >> inp;
        arr[i] = inp;
    }

    cout << kthSmallest(arr, n, n - k + 1);
    return 0;
}