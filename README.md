### REDUX TOOLKIT
1. Tổng quan về Redux toolkit?
    - 1 thư viện giúp đơn giản hóa sử dụng redux trong ứng dụng
    - Không phải viết quá nhiều code tạo reducers và actions hoặc sử dụng nhiều thư viện bên ngoài để quản lý trạng thái ứng dụng

2. Redux Toolkit sử dụng các phương thức: 
    - createSlice(): là 1 hàm sử dụng "slice" trong redux toolkit, giúp phân tách state thành các tp nhỏ hơn và quản lý dễ hơn
    - createAction(): là 1 hàm để tạo action creator đơn giản hơn trong redux toolkit
    - createReducer(): là 1 hàm để tạo reducer đơn giản hơn trong redux toolkit
    - configureStore(): là 1 hàm cấu hình redux store với tính năng như middleware, Devtools tích hợp sẵn, giúp giảm thời gian và công sức cấu hình redux store
    - createAsyncThunk(): tác vụ bất đồng bộ (ví dụ callAPI,...)
3. Lợi ích khi sử dụng redux toolkit:
   - Giảm thiểu lơngj code cần viết để tạo reducer và actions
   - Giảm thiểu boilerplate code: reducer và âctions
   - Tích hợp các công cụ như là : devtools, middleware, cấu hình store
   - sử dyngj slices để phân tách state
   - Redux toolkit tương thích với redux truyền thống
4. Cài đặt thư viện Redux Toolkit: npm install @reduxjs/toolkit